const API_KEY = '';

const searchBtn = document.getElementById('search-btn');
const loadMoreBtn = document.getElementById('load-more-btn');
const queryInput = document.getElementById('youtube-query');
const resultsContainer = document.getElementById('video-results');
const paginationContainer = document.getElementById('pagination-container');
const modal = document.getElementById('video-modal');
const player = document.getElementById('youtube-player');

let nextPageToken = '';
let currentQuery = '';

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        performSearch();
    });
}

if (queryInput) {
    queryInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        if (nextPageToken) {
            searchYouTube(currentQuery, nextPageToken);
        }
    });
}

function performSearch() {
    const query = queryInput.value;
    if (query) {
        currentQuery = query;
        nextPageToken = '';
        resultsContainer.innerHTML = '';
        searchYouTube(query);
    }
}

async function searchYouTube(query, token = '') {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&q=${encodeURIComponent(query)}&type=video&videoDuration=medium&key=${API_KEY}`;
    
    if (token) {
        url += `&pageToken=${token}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.items) {
            displayResults(data.items);
            nextPageToken = data.nextPageToken || '';
            
            if (paginationContainer) {
                paginationContainer.style.display = nextPageToken ? 'flex' : 'none';
            }
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(videos) {
    videos.forEach(video => {
        const videoId = video.id.videoId;
        const title = video.snippet.title;
        const thumbnail = video.snippet.thumbnails.medium.url;

        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.style.cursor = 'pointer';
        
        videoCard.onclick = () => openModal(videoId);

        videoCard.innerHTML = `
            <img src="${thumbnail}" alt="${title}" style="width: 100%; aspect-ratio: 16/9; border-radius: 2px; margin-bottom: 5px; object-fit: cover;">
            <h3>${title}</h3>
        `;
        resultsContainer.appendChild(videoCard);
    });
}

function openModal(videoId) {
    if (player && modal) {
        player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modal.style.display = 'block';
    }
}

function closeModal() {
    if (modal && player) {
        modal.style.display = 'none';
        player.src = '';
    }
}

window.onclick = (event) => {
    if (event.target == modal) closeModal();
};

const gameSearchInput = document.getElementById('game-search-input');
const topSearchContainer = document.querySelector('.top-search-container');
const searchSuggestions = document.getElementById('search-suggestions');

function wykonajPelneWyszukiwanie(gameTitle) {
    if (gameTitle !== "") {
        fetchGamingLive(gameTitle);
        
        const steamSearchInput = document.getElementById('searchInput');
        if (steamSearchInput) {
            steamSearchInput.value = gameTitle;
            steamSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
}

if (gameSearchInput) {
    gameSearchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            wykonajPelneWyszukiwanie(e.target.value.trim());
        }
    });
}

if (topSearchContainer) {
    const searchIcon = topSearchContainer.querySelector('.fa-search');
    if (searchIcon) {
        searchIcon.style.cursor = 'pointer';
        searchIcon.addEventListener('click', function() {
            if (gameSearchInput) {
                wykonajPelneWyszukiwanie(gameSearchInput.value.trim());
            }
        });
    }
}

if (searchSuggestions) {
    searchSuggestions.addEventListener('click', function(e) {
        const clickedText = e.target.textContent ? e.target.textContent.trim() : "";
        setTimeout(() => {
            const inputValue = gameSearchInput ? gameSearchInput.value.trim() : "";
            const gameTitle = inputValue || clickedText;
            if (gameTitle !== "") {
                wykonajPelneWyszukiwanie(gameTitle);
            }
        }, 100);
    });
}

document.addEventListener('click', function(e) {
    const btn = e.target.closest('.stat-button');
    if (btn) {
        const textEl = btn.querySelector('.btn-text');
        if (textEl) {
            fetchGamingLive(textEl.textContent.trim());
        }
    }
});

async function fetchGamingLive(specificGame = null) {
    const ytCells = document.querySelectorAll('[id="yt-live-cell"]');
    if (ytCells.length === 0) return;

    const query = specificGame ? `${specificGame} pl` : 'gra|pl|polska';
    const maxResults = specificGame ? '5' : '10';

    const params = new URLSearchParams({
        part: 'snippet',
        type: 'video',
        eventType: 'live',
        order: 'viewCount',
        videoCategoryId: '20',
        q: query,
        relevanceLanguage: 'pl',
        regionCode: 'PL',
        maxResults: maxResults,
        key: API_KEY
    });

    try {
        let response = await fetch(`https://www.googleapis.com/youtube/v3/search?${params.toString()}`);
        let data = await response.json();
        let isGlobalFallback = false;

        if (specificGame && (!data.items || data.items.length === 0)) {
            const globalParams = new URLSearchParams({
                part: 'snippet',
                type: 'video',
                eventType: 'live',
                order: 'viewCount',
                videoCategoryId: '20',
                q: specificGame,
                maxResults: '5',
                key: API_KEY
            });
            response = await fetch(`https://www.googleapis.com/youtube/v3/search?${globalParams.toString()}`);
            data = await response.json();
            isGlobalFallback = true;
        }

        if (data.items && data.items.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.items.length);
            const video = data.items[randomIndex];
            
            const videoId = video.id.videoId;
            const title = video.snippet.title;
            const thumbnail = video.snippet.thumbnails.high.url;
            
            let badgeText = specificGame ? `Na żywo: ${specificGame}` : "Gry na żywo (PL)";
            if (specificGame && isGlobalFallback) {
                badgeText = `Na żywo: ${specificGame} (Global)`;
            }

            ytCells.forEach(cell => {
                cell.innerHTML = `
                    <div class="live-container" onclick="openModal('${videoId}')" style="position: relative; width: 100%; height: 100%; cursor: pointer;">
                        <span class="live-badge" style="position: absolute; top: 15px; left: 15px; background: #e74c3c; color: white; padding: 5px 10px; border-radius: 4px; font-weight: bold; z-index: 10;">${badgeText}</span>
                        <img src="${thumbnail}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
                        <div class="live-title-overlay" style="position: absolute; bottom: 0; width: 100%; background: rgba(0,0,0,0.7); color: white; padding: 15px; box-sizing: border-box; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; font-size: 14px;">${title}</div>
                    </div>
                `;
            });
        } else {
            const message = specificGame ? `Aktualnie nikt nie prowadzi streamów z ${specificGame}` : "Nie znaleziono transmisji";
            ytCells.forEach(cell => {
                cell.innerHTML = `<div class="yt-loading">${message}</div>`;
            });
        }
    } catch (error) {
        ytCells.forEach(cell => {
            cell.innerHTML = '<div class="yt-loading">Błąd połączenia</div>';
        });
    }
}

fetchGamingLive();


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.checked = true;
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeToggle) themeToggle.checked = false;
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});

const oryginalneShowQuestion = window.showQuestion;
if (oryginalneShowQuestion) {
    window.showQuestion = function() {
        oryginalneShowQuestion();
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            const buttons = document.querySelectorAll('.answer-btn');
            buttons.forEach(btn => {
                btn.style.backgroundColor = '#fff0f2';
            });
        }
    };
}

const themeToggleInput = document.getElementById('theme-toggle');
if (themeToggleInput) {
    themeToggleInput.addEventListener('change', function() {
        const buttons = document.querySelectorAll('.answer-btn');
        if (this.checked) {
            buttons.forEach(btn => {
                if (!btn.disabled) btn.style.backgroundColor = '#fff0f2';
            });
        } else {
            buttons.forEach(btn => {
                if (!btn.disabled) btn.style.backgroundColor = '#3d4450';
            });
        }
    });
}