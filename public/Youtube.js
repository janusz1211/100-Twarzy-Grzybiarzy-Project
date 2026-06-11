(function() {
    const API_KEY = 'AIzaSyBqbummZzueGCF453eWd0B4i73QPiPAQG8';
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
        searchBtn.addEventListener('click', () => { performSearch(); });
        queryInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
        loadMoreBtn.addEventListener('click', () => { if (nextPageToken) searchYouTube(currentQuery, nextPageToken); });
        window.onclick = (event) => { if (event.target == modal) closeModal(); };
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
        if (token) url += `&pageToken=${token}`;
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
        } catch (error) { console.error(error); }
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
        if(player && modal) {
            player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.style.display = 'block';
        }
    }

    function closeModal() {
        if(player && modal) {
            modal.style.display = 'none';
            player.src = '';
        }
    }

    const ytSearchInputObj = document.getElementById('game-search-input');
    if (ytSearchInputObj) {
        ytSearchInputObj.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const gameTitle = e.target.value.trim();
                if (gameTitle !== "") fetchGamingLive(gameTitle);
            }
        });
    }

    window.fetchGamingLive = fetchGamingLive;

    async function fetchGamingLive(specificGame = null) {
        const ytCell = document.getElementById('yt-live-cell');
        if (!ytCell) return;

        const query = specificGame ? `${specificGame} pl` : 'gra|pl|polska';
        const maxResults = specificGame ? '5' : '10';
        const params = new URLSearchParams({
            part: 'snippet', type: 'video', eventType: 'live', order: 'viewCount',
            videoCategoryId: '20', q: query, relevanceLanguage: 'pl', regionCode: 'PL',
            maxResults: maxResults, key: API_KEY
        });

        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${params.toString()}`);
            const data = await response.json();

            if (data.items && data.items.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.items.length);
                const video = data.items[randomIndex];
                const videoId = video.id.videoId;
                const title = video.snippet.title;
                const badgeText = specificGame ? `Na żywo: ${specificGame}` : "Gry na żywo (PL)";

                ytCell.innerHTML = `
                    <div class="youtube-embed-wrapper" style="width: 100%; height: 100%; position: relative;">
                        <div style="position: absolute; top: 0; left: 0; width: 100%; padding: 15px; background: linear-gradient(rgba(0,0,0,0.8), transparent); z-index: 50; color: white;">
                            <span style="background: #e74c3c; padding: 2px 8px; font-weight: bold; font-size: 12px; border-radius: 4px;">${badgeText}</span>
                            <h3 style="margin: 5px 0 0 0; font-size: 14px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">${title}</h3>
                        </div>
                        <iframe 
                            src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1" 
                            style="width: 100%; height: 100%; border: none;" 
                            allow="autoplay; encrypted-media" 
                            allowfullscreen>
                        </iframe>
                    </div>
                `;
            } else {
                const message = specificGame ? `Brak streamów z ${specificGame}` : "Nie znaleziono transmisji";
                ytCell.innerHTML = `<div class="yt-loading">${message}</div>`;
            }
        } catch (error) {
            ytCell.innerHTML = '<div class="yt-loading">Błąd połączenia</div>';
        }
    }

    // Uruchamiamy od razu po załadowaniu pliku
    fetchGamingLive();
})();