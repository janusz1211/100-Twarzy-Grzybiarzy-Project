const apiKey = '23CAC94E18CA36E7EA73EC975739CDBE'; 
const proxyUrl = 'https://corsproxy.io/?';

let zapisanaListaGier = [];
let przefiltrowaneGry = [];
let wyswietloneGry = 0;
let wybranyAppId = null; 
const PORCJA_GIER = 10; 

async function wyciagnijSteamID() {
    const inputElement = document.getElementById('steamInput');
    const wynikDiv = document.getElementById('wynik');
    
    if (!inputElement) return;
    const link = inputElement.value.trim();

    if (!link) {
        if (wynikDiv) wynikDiv.innerHTML = "<p style='color: #ff4d4d;'>Proszę wprowadzić link do profilu Steam!</p>";
        return;
    }

    if (wynikDiv) wynikDiv.innerHTML = "<p style='color: #66c0f4;'>Trwa sprawdzanie profilu...</p>";

    try {
        const cleanLink = link.replace(/\/$/, "");
        const parts = cleanLink.split('/');
        const lastPart = parts.pop();
        let steamId = "";

        if (cleanLink.includes('/id/')) {
            const resolveUrl = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${apiKey}&vanityurl=${lastPart}`;
            const response = await fetch(proxyUrl + encodeURIComponent(resolveUrl));
            const data = await response.json();
            
            if (data.response && data.response.success === 1) {
                steamId = data.response.steamid;
            } else {
                throw new Error("Nie znaleziono użytkownika o takim custom URL.");
            }
        } else if (cleanLink.includes('/profiles/')) {
            steamId = lastPart;
        } else {
            throw new Error("Nieprawidłowy format linku. Wklej pełny link do profilu Steam.");
        }

        if (wynikDiv) wynikDiv.innerHTML = "<p style='color: #4df14d;'>Zalogowano pomyślnie!</p>";
        await wyswietlProfil(steamId);
        location.reload();

    } catch (error) {
        console.error("Błąd logowania:", error);
        if (wynikDiv) wynikDiv.innerHTML = `<p style='color: #ff4d4d;'>${error.message}</p>`;
    }
}

async function wyswietlProfil(steamId) {
    try {
        const summaryUrl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamId}`;
        const response = await fetch(proxyUrl + encodeURIComponent(summaryUrl));
        const data = await response.json();
        const gracz = data.response.players[0];

        if (gracz) {
            const container = document.getElementById('userAvatarContainer');
            if (container) {
                container.innerHTML = `<img src="${gracz.avatarfull}" class="steam-avatar-overlay" alt="Avatar">`;
            }
            localStorage.setItem('zapisaneSteamID', steamId);
            
            if (document.querySelector('.rightcol')) {
                await pobierzIGrafikiGier(steamId);
            }
        }
    } catch (error) {
        console.error("Błąd ładowania profilu:", error);
    }
}

function wyloguj() {
    localStorage.removeItem('zapisaneSteamID');
    
    const container = document.getElementById('userAvatarContainer');
    if (container) {
        container.innerHTML = `
            <div class="glowa"></div>
            <div class="ramiona"></div>
        `;
    }
    
    const wynikDiv = document.getElementById('wynik');
    if (wynikDiv) wynikDiv.innerHTML = "";
    
    const inputElement = document.getElementById('steamInput');
    if (inputElement) inputElement.value = "";
    
    const containerGier = document.querySelector('.rightcol-content');
    if (containerGier) containerGier.innerHTML = "";
    location.reload();
}

async function pobierzIGrafikiGier(steamId) {
    try {
        const gamesUrl = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${steamId}&include_appinfo=true&format=json`;
        const response = await fetch(proxyUrl + encodeURIComponent(gamesUrl));
        const data = await response.json();

        if (data.response && data.response.games) {
            zapisanaListaGier = data.response.games;
            przefiltrowaneGry = [...zapisanaListaGier];
            
            const defaultBtn = document.querySelector('.leftcol-btn');
            sortujGry('playtime', defaultBtn);
        }
    } catch (error) {
        console.error("Błąd pobierania gier:", error);
    }
}

function filtrujGry(inputTarget) {
    const query = inputTarget.value.toLowerCase().trim();
    przefiltrowaneGry = zapisanaListaGier.filter(gra => gra.name.toLowerCase().includes(query));

    wyswietloneGry = 0;
    const container = document.querySelector('.rightcol-content');
    if (container) {
        container.innerHTML = ""; 
        ladujWiecejGier(); 
    }
}

function sortujGry(metoda, kliknietyBtn) {
    if (kliknietyBtn) {
        document.querySelectorAll('.leftcol-btn').forEach(btn => btn.classList.remove('active-sort'));
        kliknietyBtn.classList.add('active-sort');
    }

    const sortFn = (a, b) => {
        if (a.appid === wybranyAppId) return -1;
        if (b.appid === wybranyAppId) return 1;
        if (metoda === 'playtime') return (b.playtime_forever || 0) - (a.playtime_forever || 0);
        if (metoda === 'name') return a.name.localeCompare(b.name);
        if (metoda === 'recent') return (b.rtime_last_played || 0) - (a.rtime_last_played || 0);
        return 0;
    };

    zapisanaListaGier.sort(sortFn);
    przefiltrowaneGry.sort(sortFn);

    wyswietloneGry = 0;
    const container = document.querySelector('.rightcol-content');
    if (container) {
        container.innerHTML = ""; 
        ladujWiecejGier();
    }
}

function ladujWiecejGier() {
    const container = document.querySelector('.rightcol-content');
    if (!container) return;

    const kolejnaPorcja = przefiltrowaneGry.slice(wyswietloneGry, wyswietloneGry + PORCJA_GIER);

    if (kolejnaPorcja.length === 0 && wyswietloneGry === 0) {
        container.innerHTML = "<p style='color: #888; text-align: center; padding: 20px;'>Nie znaleziono gier.</p>";
        return;
    }

    kolejnaPorcja.forEach(gra => {
        const btn = document.createElement('button');
        btn.className = 'stat-button';
        if (gra.appid === wybranyAppId) btn.classList.add('active-title');
        
        const verticalImg = `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${gra.appid}/library_600x900.jpg`;
        const wideImg = `https://cdn.akamai.steamstatic.com/steam/apps/${gra.appid}/header.jpg`;
        const placeholder = `https://community.cloudflare.steamstatic.com/public/images/applications/store/header_placeholder.png`;

        btn.innerHTML = `
            <img src="${verticalImg}" class="btn-img" 
                 onerror="if (this.src != '${wideImg}') { this.src = '${wideImg}'; } else { this.src = '${placeholder}'; }">
            <span class="btn-text">${gra.name}</span>
        `;

        btn.onclick = function() { 
            Showstats(gra.appid, gra.name, gra.playtime_forever, this); 
        };
        container.appendChild(btn);
    });

    wyswietloneGry += PORCJA_GIER;
}

const rightCol = document.querySelector('.rightcol');
if (rightCol) {
    rightCol.addEventListener('scroll', function() {
        const isMobile = window.innerWidth <= 900;
        if (isMobile) {
            if (this.scrollLeft + this.clientWidth >= this.scrollWidth - 50) {
                if (wyswietloneGry < przefiltrowaneGry.length) ladujWiecejGier();
            }
        } else {
            if (this.scrollTop + this.clientHeight >= this.scrollHeight - 50) {
                if (wyswietloneGry < przefiltrowaneGry.length) ladujWiecejGier();
            }
        }
    });
}
let aktualnaGraDane = {};

async function Showstats(appId, titleName, playtime, clickedBtn) {
    wybranyAppId = appId;
    const content = document.querySelector('.leftcol-content');
    const steamId = localStorage.getItem('zapisaneSteamID');
    
    document.querySelectorAll('.stat-button').forEach(btn => btn.classList.remove('active-title'));
    if (clickedBtn) clickedBtn.classList.add('active-title');

    content.innerHTML = `<p style="color: #66c0f4; text-align:center; padding: 40px;">Ładowanie danych z bazy Steam...</p>`;

    try {
        const statsUrl = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?key=${apiKey}&steamid=${steamId}&appid=${appId}`;
        const globalUrl = `https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=${appId}`;
        const schemaUrl = `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${apiKey}&appid=${appId}&l=polish`;
        
        const currentPlayersUrl = `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appId}`;
        const storeUrl = `https://store.steampowered.com/api/appdetails?appids=${appId}&l=polish`;

        const [resPlayer, resGlobal, resSchema, resPlayersCount, resStore] = await Promise.all([
            fetch(proxyUrl + encodeURIComponent(statsUrl)).then(r => r.json()).catch(() => ({})),
            fetch(proxyUrl + encodeURIComponent(globalUrl)).then(r => r.json()).catch(() => ({})),
            fetch(proxyUrl + encodeURIComponent(schemaUrl)).then(r => r.json()).catch(() => ({})),
            fetch(proxyUrl + encodeURIComponent(currentPlayersUrl)).then(r => r.json()).catch(() => ({})),
            fetch(proxyUrl + encodeURIComponent(storeUrl)).then(r => r.json()).catch(() => ({}))
        ]);

        const gameHeaderImg = `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/header.jpg`;
        const graczeOnline = resPlayersCount?.response?.player_count || "Brak danych";
        
        const sklepDane = resStore?.[appId]?.success ? resStore[appId].data : null;
        const deweloper = sklepDane?.developers ? sklepDane.developers.join(', ') : 'Nieznany';
        const wydawca = sklepDane?.publishers ? sklepDane.publishers.join(', ') : 'Nieznany';
        const gatunki = sklepDane?.genres ? sklepDane.genres.map(g => g.description).join(', ') : 'Brak danych';
        const dataPremiery = sklepDane?.release_date?.date || 'Brak danych';

        aktualnaGraDane = {
            titleName,
            playtime,
            graczeOnline,
            deweloper,
            wydawca,
            gatunki,
            dataPremiery,
            resPlayer,
            resGlobal,
            resSchema
        };

        content.innerHTML = `
            <div class="steam-column-blur-background">
                <img src="${gameHeaderImg}" class="steam-blur-image-layer" alt="">
            </div>

            <div class="steam-hero-wrapper">
                <div class="steam-hero-banner-container">
                    <img src="${gameHeaderImg}" class="steam-hero-banner-clean" alt="">
                </div>
            </div>

            <div class="steam-game-header-container">
                <h3 class="steam-game-blue-title">${titleName}</h3>
            </div>
            
            <div class="steamdb-tabs-container">
                <button class="steamdb-tab-btn active" onclick="przelaczKarte('personal')">
                    <i class="fas fa-user"></i> Twoje statystyki
                </button>
                <button class="steamdb-tab-btn" onclick="przelaczKarte('global')">
                    <i class="fas fa-chart-line"></i> Informacje o grze
                </button>
            </div>

            <div id="steamdb-tab-content-target"></div>
        `;

        renderujKartePersonalna();

    } catch (e) {
        console.error("Błąd ładowania danych gry:", e);
        content.innerHTML = `<p style="color: #ff4d4d; text-align:center; padding:20px;">Błąd komunikacji z API Steam.</p>`;
    }
}

function przelaczKarte(typ) {
    document.querySelectorAll('.steamdb-tab-btn').forEach(btn => btn.classList.remove('active'));
    
    if (typ === 'personal') {
        event.currentTarget.classList.add('active');
        renderujKartePersonalna();
    } else {
        event.currentTarget.classList.add('active');
        renderujKarteGlobalna();
    }
}

function renderujKartePersonalna() {
    const target = document.getElementById('steamdb-tab-content-target');
    if (!target) return;

    let html = `
        <div class="steam-playtime-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>Czas gry: <strong>${Math.round(aktualnaGraDane.playtime / 60)}h</strong></span>
        </div>
    `;

    const resPlayer = aktualnaGraDane.resPlayer;
    if (resPlayer?.playerstats?.success && Array.isArray(resPlayer.playerstats.achievements)) {
        const achievements = resPlayer.playerstats.achievements;
        const unlocked = achievements.filter(a => Number(a.achieved) === 1);
        const total = achievements.length;
        const percent = total > 0 ? Math.round((unlocked.length / total) * 100) : 0;

        html += `
            <div class="steam-progress-container">
                <p>Osiągnięcia: <strong>${unlocked.length} / ${total}</strong> (${percent}%)</p>
                <div class="steam-progress-bar-bg">
                    <div class="steam-progress-bar-fill" style="width: ${percent}%;"></div>
                </div>
            </div>
        `;

        const globalChievis = aktualnaGraDane.resGlobal?.achievementpercentages?.achievements;
        const schemaChievis = aktualnaGraDane.resSchema?.game?.availableGameStats?.achievements;

        if (unlocked.length > 0 && Array.isArray(globalChievis) && globalChievis.length > 0) {
            const rzadkieOsiagniecia = unlocked.map(pChieve => {
                const globalMatch = globalChievis.find(gChieve => gChieve.name === pChieve.apiname);
                const schemaMatch = Array.isArray(schemaChievis) ? schemaChievis.find(sChieve => sChieve.name === pChieve.apiname) : null;
                let rawPercent = 100;
                if (globalMatch && globalMatch.percent !== undefined) rawPercent = Number(globalMatch.percent);

                return {
                    displayName: schemaMatch?.displayName || pChieve.apiname,
                    description: schemaMatch?.description || "Osiągnięcie ukryte.",
                    iconUrl: schemaMatch?.icon || "",
                    percent: isNaN(rawPercent) ? 100 : rawPercent
                };
            });

            rzadkieOsiagniecia.sort((a, b) => a.percent - b.percent);
            const topRarest = rzadkieOsiagniecia.slice(0, 3);

            html += `
                <div class="rarest-achievements">
                    <h4><i class="fas fa-trophy" style="margin-right: 8px;"></i> Twoje najrzadsze osiągnięcia:</h4>
                    <ul>
            `;

            topRarest.forEach(ach => {
                html += `
                    <li class="achievement-item">
                        ${ach.iconUrl ? `<img src="${ach.iconUrl}" class="achievement-icon" alt="">` : ''}
                        <div class="achievement-text-block">
                            <div class="achievement-title">${ach.displayName}</div>
                            <div class="achievement-desc">${ach.description}</div>
                        </div>
                        <span class="achievement-badge">${ach.percent.toFixed(1)}% graczy</span>
                    </li>
                `;
            });
            html += `</ul></div>`;
        }
    } else {
        html += `<p style="color: #888; padding: 20px; text-align: center; font-style: italic;">Brak danych o osiągnięciach profilu.</p>`;
    }

    target.innerHTML = html;
}

function renderujKarteGlobalna() {
    const target = document.getElementById('steamdb-tab-content-target');
    if (!target) return;

    const sformatowaniGracze = typeof aktualnaGraDane.graczeOnline === 'number' 
        ? aktualnaGraDane.graczeOnline.toLocaleString() 
        : aktualnaGraDane.graczeOnline;

    target.innerHTML = `
        <div class="steamdb-stats-grid">
            
            <div class="steamdb-card-live">
                <div class="live-pulse-dot"></div>
                <div class="live-info">
                    <span class="live-label">Gracze online (Live)</span>
                    <span class="live-value">${sformatowaniGracze}</span>
                </div>
            </div>

            <div class="steamdb-info-table-container">
                <h4><i class="fas fa-database"></i> Informacje o aplikacji</h4>
                <table class="steamdb-info-table">
                    <tr>
                        <td>Deweloper</td>
                        <td><strong>${aktualnaGraDane.deweloper}</strong></td>
                    </tr>
                    <tr>
                        <td>Wydawca</td>
                        <td><strong>${aktualnaGraDane.wydawca}</strong></td>
                    </tr>
                    <tr>
                        <td>Gatunki</td>
                        <td class="genres-tags">${aktualnaGraDane.gatunki}</td>
                    </tr>
                    <tr>
                        <td>Premiera</td>
                        <td>${aktualnaGraDane.dataPremiery}</td>
                    </tr>
                </table>
            </div>

        </div>
    `;
}
window.addEventListener('load', () => {
    const zapamietaneID = localStorage.getItem('zapisaneSteamID');
    if (zapamietaneID) {
        setTimeout(() => {
            wyswietlProfil(zapamietaneID);
        }, 50);
    } else {
        const lewyPanel = document.querySelector('.leftcol-content');
        if (lewyPanel) {
            lewyPanel.innerHTML = `
                <div style="text-align: center; padding: 40px; width: 100%;">
                    <p style="color: #888; font-size: 18px; font-family: 'Motiva Sans', Arial, sans-serif;">
                        <i class="fas fa-lock" style="margin-bottom: 10px; font-size: 24px;"></i><br>
                        Zaloguj się, aby zobaczyć swoje statystyki!
                    </p>
                </div>
            `;
        }
    }
});

document.addEventListener('input', function (e) {
    if (!e.target) return;
    
    const maKlase = e.target.classList.contains('searchInput');
    const maPlaceholder = e.target.placeholder && e.target.placeholder.toLowerCase().includes('search');
    const maTypSearch = e.target.type === 'search';

    if (maKlase || maPlaceholder || maTypSearch) {
        filtrujGry(e.target);
    }
});