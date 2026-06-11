<div align="center">

# 🍄 100 Twarzy Grzybiarzy

### Interaktywne centrum rozrywki dla graczy

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-5.2.1-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**Repozytorium:** [github.com/bobkikropki/100-Twarzy-Grzybiarzy-Project](https://github.com/bobkikropki/100-Twarzy-Grzybiarzy-Project)  
**Autorzy:** Zespół SIGMY &nbsp;|&nbsp; **Rok:** 2026

</div>

---

## 📋 Spis treści

1. [Opis projektu](#-opis-projektu)
2. [Technologie i zależności](#-technologie-i-zależności)
3. [Struktura projektu](#-struktura-projektu)
4. [Instalacja i uruchomienie](#-instalacja-i-uruchomienie)
5. [Architektura aplikacji](#-architektura-aplikacji)
6. [Funkcjonalności](#-funkcjonalności)
   - [Strona główna](#-strona-główna-indexhtml)
   - [Centrum Quizu](#-centrum-quizu-gamehtml)
   - [Logowanie Steam](#-logowanie-steam-steamloginhtml)
7. [Integracje z zewnętrznymi API](#-integracje-z-zewnętrznymi-api)
8. [Opis plików źródłowych](#-opis-plików-źródłowych)
9. [Interfejs użytkownika](#-interfejs-użytkownika)
10. [Dostępność](#-dostępność-accessibility)

---

## 🍄 Opis projektu

**100 Twarzy Grzybiarzy** to pełnoprawna interaktywna aplikacja webowa stanowiąca centrum rozrywki dla polskojęzycznej społeczności graczy. Projekt łączy w sobie trzy główne filary:

- 🎮 **Quiz wiedzy o grach** — 9 kategorii, ponad 198 pytań
- 📺 **Centrum streamów** — transmisje na żywo z Twitch, YouTube i Kick w jednym miejscu
- 🎯 **Integracja Steam** — biblioteka gier, statystyki i wyszukiwarka bezpośrednio ze Steam

Aplikacja jest w całości polskojęzyczna i skierowana do graczy, którzy chcą sprawdzić swoją wiedzę oraz śledzić ulubionych streamerów bez przełączania zakładek.

---

## 🛠 Technologie i zależności

### Backend

| Technologia | Wersja | Zastosowanie |
|---|---|---|
| **Node.js** | ≥ 18.x | Środowisko uruchomieniowe serwera |
| **Express.js** | 5.2.1 | Framework HTTP, routing, serwowanie plików statycznych |
| **CORS** | 2.8.6 | Obsługa nagłówków Cross-Origin Resource Sharing |

### Frontend

| Technologia | Zastosowanie |
|---|---|
| **HTML5** | Struktura i semantyka stron |
| **CSS3** | Stylowanie, animacje, efekt glassmorphism |
| **JavaScript (Vanilla)** | Cała logika aplikacji — brak frameworków |
| **Flickity 2** *(CDN)* | Karuzela streamów na stronie głównej |
| **Font Awesome 6** *(CDN)* | Ikony w interfejsie użytkownika |

### Zewnętrzne API

| API | Platforma | Zastosowanie |
|---|---|---|
| **Steam Web API** | Steam | Profil gracza, biblioteka gier, czas rozgrywki |
| **Twitch GraphQL API** | Twitch | Lista aktywnych transmisji |
| **YouTube Data API v3** | YouTube | Wyszukiwanie filmów i transmisji |
| **Kick API** | Kick | Pobieranie streamów (OAuth Client Credentials) |

---

## 📁 Struktura projektu

```
100-Twarzy-Grzybiarzy-Project/
│
├── 📄 package.json               # Konfiguracja projektu i zależności npm
├── 📄 package-lock.json          # Zablokowane wersje zależności
├── 📄 .gitignore                 # Pliki ignorowane przez Git
├── 📄 steamapihelp.txt           # Notatki pomocnicze — Steam API
├── 📄 README.md                  # Niniejszy plik
├── 📄 DOKUMENTACJA.md            # Poprzednia wersja dokumentacji
│
├── 📂 public/                    # Pliki statyczne serwowane przez Express
│   │
│   ├── 🌐 index.html             # Strona główna — centrum aplikacji
│   ├── 🎮 game.html              # Centrum Quizu
│   ├── 🔑 SteamLogin.html        # Logowanie przez Steam
│   ├── 📺 YtSearch.html          # Wyszukiwarka YouTube (podstrona)
│   ├── 📊 tile2.html             # Panel statystyk Steam
│   │
│   ├── 🎨 style.css              # Główne style aplikacji
│   ├── 🎨 game.css               # Style Centrum Quizu
│   ├── 🎨 dstyle.css             # Style pomocnicze (dashboard)
│   ├── 🎨 tile2.css              # Style kafelków i paneli
│   ├── 🎨 Steamlogin.css         # Style strony logowania Steam
│   ├── 🎨 emebeded-content.css   # Style modalu z odtwarzaczem
│   ├── 🎨 theme.css              # Style motywu jasny/ciemny
│   │
│   ├── ⚙️  script.js              # Główna logika: streamy, Steam, nawigacja
│   ├── ⚙️  game.js               # Silnik quizu + baza 198 pytań
│   ├── ⚙️  SteamAPI.js           # Obsługa Steam API i sesji użytkownika
│   ├── ⚙️  twitchapi.js          # Integracja z Twitch API
│   ├── ⚙️  dscript.js            # Serwer Express + proxy Steam API
│   └── ⚙️  theme.js              # Przełącznik motywu jasny/ciemny
│
├── 📂 images/
│   ├── 📂 game/
│   │   ├── cs2/                  # Grafiki CS2 (archiwalne — quiz nie używa obrazów)
│   │   └── wiedzmin/             # Grafiki Wiedźmin 3 (archiwalne)
│   └── steam/                   # Grafiki integracji Steam
│
└── 📂 pliki/
    └── zdjęcia/                  # Media: loga platform, animacje, easter egg
```

---

## 🚀 Instalacja i uruchomienie

### Wymagania wstępne

Przed instalacją upewnij się, że masz:

- ✅ **Node.js** w wersji 18 lub wyższej — [nodejs.org](https://nodejs.org)
- ✅ **npm** (dołączony do Node.js)
- ✅ Klucz **YouTube Data API v3** — [Google Cloud Console](https://console.cloud.google.com)
- ✅ Klucz **Steam Web API** — [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey)

---

### Krok 1 — Sklonuj repozytorium

```bash
git clone https://github.com/bobkikropki/100-Twarzy-Grzybiarzy-Project.git
cd 100-Twarzy-Grzybiarzy-Project
```

### Krok 2 — Zainstaluj zależności

```bash
npm install
```

Po wykonaniu tej komendy zostanie zainstalowane:
- `express` (^5.2.1)
- `cors` (^2.8.6)

### Krok 3 — Skonfiguruj klucze API

**Steam API** — otwórz `public/dscript.js` i wstaw swój klucz w odpowiedniej zmiennej:
```javascript
const STEAM_API_KEY = 'TWOJ_KLUCZ_STEAM_API_TUTAJ';
```

**YouTube API** — otwórz `public/dscript.js` i uzupełnij:
```javascript
const API_KEY = 'TWOJ_KLUCZ_YOUTUBE_API_TUTAJ';
```

### Krok 4 — Uruchom serwer

```bash
node dscript.js
```

Lub z automatycznym restartem przy zmianach (wymaga `nodemon`):
```bash
npx nodemon dscript.js
```

### Krok 5 — Otwórz aplikację

```
http://localhost:3000
```

---

## 🏗 Architektura aplikacji

Aplikacja działa w modelu **klient–serwer**, gdzie serwer Node.js pełni rolę hosta plików statycznych oraz proxy do Steam API.

```
╔══════════════════════════════════════════════════════════════╗
║                    PRZEGLĄDARKA (Klient)                     ║
║                                                              ║
║   index.html ──► script.js     ──►  Twitch GraphQL API       ║
║   game.html  ──► game.js       ──►  YouTube Data API v3      ║
║   tile2.html ──► SteamAPI.js   ──►  Kick API (OAuth)         ║
║                 twitchapi.js                                  ║
╚══════════════════════════╤═══════════════════════════════════╝
                           │ HTTP (localhost:3000)
╔══════════════════════════▼═══════════════════════════════════╗
║                  SERWER (Node.js + Express)                  ║
║                                                              ║
║   GET /                    ──►  public/index.html            ║
║   GET /api/steam/:steamId  ──►  Proxy → Steam Web API        ║
║   GET /pliki/*             ──►  Pliki statyczne              ║
╚══════════════════════════════════════════════════════════════╝
```

### Przepływ danych

```
Użytkownik otwiera stronę
        │
        ▼
Express serwuje index.html + pliki statyczne
        │
        ▼
JavaScript inicjuje zapytania do API
        │
        ├──► Steam API  ──► przez serwer Node (proxy — klucz ukryty przed klientem)
        ├──► Twitch     ──► bezpośrednio (GraphQL + Client ID)
        ├──► YouTube    ──► bezpośrednio (REST + klucz API)
        └──► Kick       ──► bezpośrednio (OAuth 2.0 Client Credentials)
```

> **Dlaczego proxy dla Steam?** Klucz Steam API musi pozostać po stronie serwera. Serwer Express pośredniczy w każdym zapytaniu, ukrywając klucz przed przeglądarką.

---

## ✨ Funkcjonalności

### 🏠 Strona główna (`index.html`)

#### Pasek nawigacyjny
Stały pasek na górze zawiera:
- **Logo** projektu z animacją hover
- **Linki nawigacyjne:** Główna · Statystyki · Wyszukiwarka · Quiz
- **Wyszukiwarka Steam** z autouzupełnianiem (podpowiedzi ze Steam Store API)
- **Menu użytkownika** z awatarem — pokazuje stan zalogowania

#### Galeria streamów (Flickity)

| Slajd | Zawartość |
|---|---|
| 1 | Animowane logo projektu (GIF powitalny) |
| 2 | Najchętniej oglądany stream **YouTube** (polskojęzyczny) |
| 3 | Najchętniej oglądany stream **Kick** |
| 4 | Najchętniej oglądany stream **Twitch** |

Kliknięcie kafelka otwiera **modal z wbudowanym odtwarzaczem** iframe bezpośrednio na stronie — bez opuszczania aplikacji.

#### Panel wyszukiwarki YouTube
- Pole tekstowe do wyszukiwania filmów i transmisji na żywo
- Wyniki ładowane przez YouTube Data API v3
- Przycisk **„Załaduj więcej"** z paginacją przez `nextPageToken`
- Kliknięcie wyniku → odtwarzacz modalny

#### Stopka
- Dane kontaktowe (e-mail, Discord, Steam, GitHub)
- Przycisk **Ułatwień dostępu** → panel opcji
- **Easter egg** 🐱 — kliknięcie kota w prawym dolnym rogu 5 razy wywołuje jumpscare

---

### 🎮 Centrum Quizu (`game.html`)

Interaktywny quiz wiedzy o grach wideo. Każda sesja losuje **10 pytań** z wybranej kategorii.

#### Dostępne kategorie

| # | Kategoria | Pytań w bazie | Pytań na sesję |
|---|---|---|---|
| 1 | 🔫 **Counter-Strike 2** | 21 | 10 (losowe) |
| 2 | 🗡️ **Wiedźmin 3: Dziki Gon** | 15 | 10 (losowe) |
| 3 | 😢 **The Binding of Isaac** | 15 | 10 (losowe) |
| 4 | 🐉 **Final Fantasy** (wszystkie części) | 30 | 10 (losowe) |
| 5 | 🧱 **Minecraft** | 22 | 10 (losowe) |
| 6 | 💀 **Fear & Hunger** | 15 | 10 (losowe) |
| 7 | 🎭 **Fear & Hunger: Termina** | 15 | 10 (losowe) |
| 8 | 👁️ **Five Nights at Freddy's** (wszystkie części) | 25 | 10 (losowe) |
| 9 | 🪝 **Dead by Daylight** | 40 | 10 (losowe) |

> **Łącznie ponad 198 pytań** w bazie — quiz nigdy się nie powtarza tak samo.

#### Mechanika quizu

```
1. Wybierz kategorię z panelu bocznego
        │
        ▼
2. Pytanie + 4 opcje odpowiedzi (A / B / C / D)
        │
        ▼
3. Kliknięcie odpowiedzi → natychmiastowy feedback wizualny
   ✅ Poprawna  →  podświetlenie zielono / neon
   ❌ Błędna    →  podświetlenie czerwone + pokazuje poprawną
        │
        ▼
4. Automatyczne przejście po 1,5 sekundy
        │
        ▼
5. Po 10 pytaniach → Ekran końcowy z wynikiem (X / 10)
```

#### Panel boczny (lewy)
- Aktualny wynik punktowy
- Licznik pytań (np. `3/10`)
- Przyciski wyboru kategorii — każdy z tematyczną ikoną

---

### 🔑 Logowanie Steam (`SteamLogin.html`)

Strona umożliwia połączenie konta Steam z aplikacją:

1. Gracz wpisuje **URL swojego profilu Steam**
2. Aplikacja odpytuje Steam Web API przez serwer proxy
3. Pobierane dane: **awatar, nazwa użytkownika, Steam ID**
4. Steam ID zapisywany w `localStorage` przeglądarki
5. Na stronie głównej pojawia się awatar gracza

#### Panel biblioteki (`tile2.html`)
Po zalogowaniu dostępny jest widok biblioteki z:
- Listą **wszystkich gier** z czasem rozgrywki (w godzinach)
- Sortowaniem: wg **czasu gry** (malejąco) · **alfabetycznie** · **ostatnio grane**
- Przyciskiem wylogowania (czyści `localStorage`)

---

## 🌐 Integracje z zewnętrznymi API

### Steam Web API

| Endpoint | Zastosowanie |
|---|---|
| `ISteamUser/GetPlayerSummaries/v0002/` | Profil gracza (awatar, nick, Steam ID) |
| `IPlayerService/GetOwnedGames/v0001/` | Biblioteka gier z czasami rozgrywki |
| `store.steampowered.com/api/storesearch/` | Autouzupełnianie w wyszukiwarce gier |

> Klucz API przechowywany **wyłącznie po stronie serwera** w `dscript.js`. Klient nigdy nie widzi klucza.

---

### Twitch GraphQL API

Aplikacja używa nieoficjalnego endpointu GraphQL Twitcha do pobierania aktywnych polskojęzycznych transmisji.

**Mechanizm odporności na błędy (fallback):**
```
Próba 1: Client ID #1  ──► sukces → renderuj kafelek streamu
                       └──► błąd ↓
Próba 2: Client ID #2  ──► sukces → renderuj kafelek streamu
                       └──► błąd ↓
Fallback:              renderuj link do katalogu Twitch
```

---

### YouTube Data API v3

```http
GET https://www.googleapis.com/youtube/v3/search
    ?type=video
    &relevanceLanguage=pl
    &maxResults=10
    &q={zapytanie}
    &pageToken={token_strony}
```

Paginacja przez `nextPageToken` / `prevPageToken` z odpowiedzi API.

---

### Kick API

Integracja przez **OAuth 2.0 Client Credentials**. Aplikacja pobiera listę aktywnych transmisji i renderuje kafelek w karuzeli. Odtwarzanie odbywa się przez osadzony player Kick w `<iframe>`.

---

## 📄 Opis plików źródłowych

### `public/script.js` — Główny kontroler

| Funkcja | Opis |
|---|---|
| `initApp()` | Inicjalizacja po załadowaniu DOM |
| `fetchKickStream()` | Pobiera stream z Kick API i renderuje kafelek |
| `fetchYouTubeLive()` | Pobiera live z YouTube i renderuje kafelek |
| `loadSteamLibrary()` | Pobiera i wyświetla bibliotekę gier Steam |
| `sortGames(mode)` | Sortuje bibliotekę wg wybranego trybu |
| `searchYouTube(query)` | Wyszukuje filmy/streamy na YouTube |
| `openModal(url)` | Otwiera odtwarzacz modalny |
| `toggleAvatarMenu()` | Pokazuje/ukrywa menu użytkownika |
| `toggleA11yPanel()` | Otwiera/zamyka panel dostępności |

---

### `public/game.js` — Silnik quizu

Plik składa się z dwóch części: **bazy pytań** i **logiki quizu**.

```javascript
// Struktura bazy pytań
const quizData = {
    'CS2': [ /* 21 pytań */ ],
    'Wiedźmin': [ /* 15 pytań */ ],
    'Isaac': [ /* 15 pytań */ ],
    'FinalFantasy': [ /* 30 pytań */ ],
    'Minecraft': [ /* 22 pytań */ ],
    'FearAndHunger1': [ /* 15 pytań */ ],
    'FearAndHunger2': [ /* 15 pytań */ ],
    'FNAF': [ /* 25 pytań */ ],
    'DBD': [ /* 40 pytań */ ],
};

// Format każdego pytania
{
    q: 'Treść pytania?',
    a: ['Opcja A', 'Opcja B', 'Opcja C', 'Opcja D'],
    correct: 2  // indeks poprawnej odpowiedzi (0–3)
}
```

| Funkcja | Opis |
|---|---|
| `selectCategory(category)` | Losuje 10 pytań z wybranej kategorii i startuje grę |
| `showQuestion()` | Renderuje aktualne pytanie i przyciski odpowiedzi |
| `handleAnswer(index)` | Obsługuje kliknięcie, pokazuje feedback, zlicza punkty |
| `updateStats()` | Aktualizuje licznik pytań i punktów na bieżąco |
| `showResults()` | Wyświetla ekran końcowy z wynikiem `X/10` |

---

### `public/dscript.js` — Serwer Express

```javascript
// 1. Proxy Steam API — ukrywa klucz przed klientem
app.get('/api/steam/:steamId', async (req, res) => {
    // Przekazuje zapytanie do Steam z kluczem przechowywanym po stronie serwera
});

// 2. Serwowanie plików statycznych
app.use(express.static('public'));
app.use('/pliki', express.static('pliki'));

app.listen(3000);
```

---

### Pliki CSS — Przegląd

| Plik | Zakres stylów |
|---|---|
| `style.css` | Główny layout, navbar, karuzela Flickity, sekcje paneli, stopka |
| `game.css` | Quiz: panel boczny, siatka odpowiedzi, stany `.correct` / `.wrong`, ekrany wyników |
| `theme.css` | Zmienne kolorów CSS, motyw ciemny (domyślny) i jasny |
| `tile2.css` | Kafelki biblioteki Steam, widok listy gier |
| `emebeded-content.css` | Modal z odtwarzaczem, overlay, animacje wejścia/wyjścia |
| `Steamlogin.css` | Strona logowania Steam, formularz, komunikaty stanu |
| `dstyle.css` | Style pomocnicze i dodatkowe komponenty |

---

## 🎨 Interfejs użytkownika

### Styl wizualny — Glassmorphism

Cały interfejs oparty jest na estetyce **glassmorphism** — elementy wyglądają jak matowe szkło na tle dynamicznego gradientu:

```css
.card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
}
```

### Paleta kolorów

| Element | Kolor |
|---|---|
| Tło aplikacji | Ciemny gradient (`#0a0a0f` → `#1a1a2e`) |
| Akcenty / CTA | Neonowa zieleń `#00ff88` |
| Tekst główny | Biały / jasnoszary |
| Odpowiedź poprawna | Neonowa zieleń + efekt glow |
| Odpowiedź błędna | Czerwień `#ff4757` |

### Animacje i efekty

| Efekt | Opis |
|---|---|
| ✨ **Kursor z trail** | Animowany ślad za kursorem myszy (`.cursor-dot` + `.cursor-outline`) |
| 🌀 **Animowane tło** | Płynny gradient zmieniający się w pętli |
| 🔄 **CSS Transitions** | Hover effects, wejścia elementów (transition 0.3s ease) |
| 💡 **Neonowe podświetlenia** | `box-shadow` z kolorem akcentu na aktywnych elementach quizu |

### Responsywność

Layout oparty na **CSS Flexbox** i **CSS Grid**. Poprawne wyświetlanie na ekranach tabletów i komputerów.

---

## ♿ Dostępność (Accessibility)

Panel dostępny przez przycisk **Ułatwienia dostępu** w stopce strony:

| Opcja | Działanie |
|---|---|
| **Jasny motyw** | Przełącza na jasną paletę kolorów (przydatny w jasnym otoczeniu) |
| **Wysoki kontrast tekstu** | Zwiększa kontrast czcionek dla lepszej czytelności |
| **Większa czcionka (+20%)** | Powiększa rozmiar wszystkich czcionek o 20% |

Ustawienia działają dynamicznie przez JavaScript bez przeładowania strony. Preferencje zapisywane są w `localStorage`.

---

<div align="center">

---

**© 2026 100 Twarzy Grzybiarzy &nbsp;|&nbsp; CREATED BY SIGMY** 🍄

</div>
