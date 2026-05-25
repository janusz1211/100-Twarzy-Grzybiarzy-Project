const apiKey = '23CAC94E18CA36E7EA73EC975739CDBE'; 
const proxyUrl = 'https://corsproxy.io/?';

let zapisanaListaGier = [];
let przefiltrowaneGry = [];
let wyswietloneGry = 0;
let wybranyAppId = null; 
const PORCJA_GIER = 6; 

// 1. GŁÓWNA FUNKCJA LOGOWANIA (wywoływana przez onclick="wyciagnijSteamID()" w HTML)
async function wyciagnijSteamID() {
    const inputElement = document.getElementById('steamInput');
    const wynikDiv = document.getElementById('wynik');
    
    if (!inputElement) return;
    const link = inputElement.value.trim();

    // Sprawdzenie czy użytkownik w ogóle coś wpisał
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

        // Parsowanie linku Steam custom URL (/id/) lub bezpośredniego (/profiles/)
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

        // Informacja o sukcesie i załadowanie profilu
        if (wynikDiv) wynikDiv.innerHTML = "<p style='color: #4df14d;'>Zalogowano pomyślnie!</p>";
        
        // Wywołanie funkcji wyświetlającej profil gracza
        await wyswietlProfil(steamId);

    } catch (error) {
        console.error("Błąd logowania:", error);
        if (wynikDiv) wynikDiv.innerHTML = `<p style='color: #ff4d4d;'>${error.message}</p>`;
    }
}

// 2. FUNKCJA WYŚWIETLANIA PROFILU
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
            // Zapisujemy ID, aby sesja przetrwała odświeżenie strony
            localStorage.setItem('zapisaneSteamID', steamId);
            
            // Pobieranie gier wykona się tylko jeśli na stronie istnieje element kolumny gier
            if (document.querySelector('.rightcol')) {
                await pobierzIGrafikiGier(steamId);
            }
        }
    } catch (error) {
        console.error("Błąd ładowania profilu:", error);
    }
}

// 3. FUNKCJA WYLOGOWANIA (podpięta pod przycisk "Wyloguj" w HTML)
function wyloguj() {
    localStorage.removeItem('zapisaneSteamID');
    
    // Przywrócenie domyślnego pustego awatara w HTML
    const container = document.getElementById('userAvatarContainer');
    if (container) {
        container.innerHTML = `
            <div class="glowa"></div>
            <div class="ramiona"></div>
        `;
    }
    
    // Reset komunikatów i formularza
    const wynikDiv = document.getElementById('wynik');
    if (wynikDiv) wynikDiv.innerHTML = "";
    
    const inputElement = document.getElementById('steamInput');
    if (inputElement) inputElement.value = "";
    
    const containerGier = document.querySelector('.rightcol-content');
    if (containerGier) containerGier.innerHTML = "";
}

// 4. FUNKCJE DOTYCZĄCE GIER I STATYSTYK (Pozostają bez zmian)
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

function filtrujGry() {
    const searchInput = document.querySelector('.searchInput');
    if (!searchInput) return;

    const query = searchInput.value.toLowerCase();
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

async function Showstats(appId, titleName, playtime, clickedBtn) {
    wybranyAppId = appId;
    const content = document.querySelector('.leftcol-content');
    const steamId = localStorage.getItem('zapisaneSteamID');
    
    document.querySelectorAll('.stat-button').forEach(btn => btn.classList.remove('active-title'));
    if (clickedBtn) clickedBtn.classList.add('active-title');

    content.innerHTML = `<p style="color: #66c0f4;">Ładowanie statystyk dla ${titleName}...</p>`;

    try {
        const statsUrl = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?key=${apiKey}&steamid=${steamId}&appid=${appId}`;
        const response = await fetch(proxyUrl + encodeURIComponent(statsUrl));
        const data = await response.json();

        let statsHTML = `<h3 style="color: #66c0f4; border-bottom: 1px solid #444; padding-bottom: 10px;">${titleName}</h3>`;
        statsHTML += `<p style="margin-top:10px;">Czas gry: <strong>${Math.round(playtime / 60)}h</strong></p>`;

        if (data.playerstats && data.playerstats.success && Array.isArray(data.playerstats.achievements)) {
            const achievements = data.playerstats.achievements;
            const unlocked = achievements.filter(a => Number(a.achieved) === 1).length;
            const total = achievements.length;
            const percent = total > 0 ? Math.round((unlocked / total) * 100) : 0;

            statsHTML += `
                <div class="stat-row" style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 15px; color: white;">
                    <p>Osiągnięcia: <strong>${unlocked} / ${total}</strong> (${percent}%)</p>
                    <div style="background: #444; width: 100%; height: 10px; border-radius: 5px; overflow: hidden; margin-top: 10px;">
                        <div style="background: #66c0f4; width: ${percent}%; height: 100%; transition: width 0.5s ease;"></div>
                    </div>
                </div>
            `;
        } else {
            statsHTML += `<p style="color: #888; margin-top: 15px;"><i>Brak danych o osiągnięciach dla tego tytułu.</i></p>`;
        }
        content.innerHTML = statsHTML;
    } catch (e) {
        content.innerHTML = `<p style="color: #ff4d4d;">Błąd ładowania statystyk.</p>`;
    }
}

// 5. BEZPIECZNE AUTOMATYCZNE LOGOWANIE PO ODŚWIEŻENIU
// Zmieniono window.onload na addEventListener, aby nie nadpisywać innych skryptów (np. script.js)
window.addEventListener('load', () => {
    const zapamietaneID = localStorage.getItem('zapisaneSteamID');
    if (zapamietaneID) {
        setTimeout(() => {
            wyswietlProfil(zapamietaneID);
        }, 50);
    }
});