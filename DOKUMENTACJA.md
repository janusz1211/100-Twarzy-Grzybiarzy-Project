# Dokumentacja Projektu: 100 Twarzy Grzybiarzy

**Autorzy projektu:** Zespół projektowy  
**Przedmiot:** Podstawy Programowania WWW  
**Data:** Maj 2026  
**Repozytorium:** https://github.com/bobkikropki/100-Twarzy-Grzybiarzy-Project  

---

## Spis treści

1. [Opis projektu](#1-opis-projektu)
2. [Technologie i zależności](#2-technologie-i-zależności)
3. [Struktura projektu](#3-struktura-projektu)
4. [Instalacja i uruchomienie](#4-instalacja-i-uruchomienie)
5. [Architektura aplikacji](#5-architektura-aplikacji)
6. [Opis funkcjonalności](#6-opis-funkcjonalności)
7. [Integracje z zewnętrznymi API](#7-integracje-z-zewnętrznymi-api)
8. [Opis plików źródłowych](#8-opis-plików-źródłowych)
9. [Interfejs użytkownika](#9-interfejs-użytkownika)
10. [Dostępność (Accessibility)](#10-dostępność-accessibility)
11. [Znane ograniczenia](#11-znane-ograniczenia)

---

## 1. Opis projektu

**100 Twarzy Grzybiarzy** to interaktywna aplikacja webowa stanowiąca centrum rozrywki dla graczy. Projekt łączy w sobie przeglądarkę transmisji na żywo z wielu platform streamingowych, integrację z biblioteką gier Steam oraz quiz wiedzy o grach wideo.

Aplikacja skierowana jest do polskojęzycznych użytkowników i dostępna jest w całości w języku polskim.

### Główne cele projektu

- Stworzenie jednego miejsca do śledzenia transmisji na żywo z platform Twitch, YouTube i Kick
- Prezentacja statystyk biblioteki gier Steam zalogowanego użytkownika
- Umożliwienie sprawdzenia wiedzy o grach wideo poprzez interaktywny quiz
- Zapewnienie przyjemnego i dostępnego interfejsu użytkownika

---

## 2. Technologie i zależności

### Backend

| Technologia | Wersja | Zastosowanie |
|---|---|---|
| Node.js | ≥ 18.x | Środowisko uruchomieniowe serwera |
| Express.js | 5.2.1 | Framework do obsługi HTTP i routingu |
| CORS | 2.8.6 | Obsługa nagłówków Cross-Origin Resource Sharing |

### Frontend

| Technologia | Zastosowanie |
|---|---|
| HTML5 | Struktura stron |
| CSS3 | Stylowanie, animacje, efekty glassmorphism |
| JavaScript (Vanilla) | Logika aplikacji, obsługa API |
| Flickity 2 (CDN) | Karuzela/galeria zdjęć i streamów |
| Font Awesome 6 (CDN) | Ikony interfejsu użytkownika |

### Zewnętrzne API

| API | Zastosowanie |
|---|---|
| Steam Web API | Pobieranie danych biblioteki gier i profilu gracza |
| Twitch GraphQL API | Pobieranie listy aktywnych transmisji |
| YouTube Data API v3 | Wyszukiwanie i wyświetlanie filmów/transmisji |
| Kick API | Pobieranie transmisji z platformy Kick |

### Narzędzia deweloperskie

- **npm** — zarządzanie zależnościami
- **Git** — kontrola wersji
- **corsproxy.io** — proxy do omijania ograniczeń CORS przy zapytaniach do zewnętrznych API

---

## 3. Struktura projektu

```
100-Twarzy-Grzybiarzy-Project-main/
│
├── package.json              # Konfiguracja projektu i zależności npm
├── package-lock.json         # Zablokowane wersje zależności
├── .gitignore                # Pliki ignorowane przez Git
├── steamapihelp.txt          # Notatki pomocnicze dotyczące Steam API
├── Steamlogin.css            # Style dla strony logowania Steam (poziom główny)
│
├── public/                   # Pliki statyczne serwowane przez Express
│   ├── index.html            # Strona główna — centrum aplikacji
│   ├── game.html             # Strona quizu
│   ├── SteamLogin.html       # Strona logowania przez Steam
│   │
│   ├── style.css             # Główne style aplikacji
│   ├── game.css              # Style dla quizu
│   ├── dstyle.css            # Style pomocnicze (dashboard)
│   ├── tile2.css             # Style dla kafelków
│   ├── Steamlogin.css        # Style logowania Steam
│   ├── emebeded-content.css  # Style dla osadzonych treści
│   │
│   ├── script.js             # Główna logika: Kick, YouTube, nawigacja, Steam
│   ├── game.js               # Logika quizu i baza pytań
│   ├── dscript.js            # Skrypt pomocniczy / serwer proxy
│   └── twitchapi.js          # Integracja z Twitch API
│
├── images/                   # Zasoby graficzne
│   ├── game/
│   │   ├── cs2/              # Obrazy do quizu CS2 (bronie, mapy)
│   │   └── wiedzmin/         # Obrazy do quizu Wiedźmin 3
│   └── steam/                # Grafiki związane z integracją Steam
│
└── pliki/
    └── zdjęcia/              # Dodatkowe media (gify, loga, obrazy)
```

---

## 4. Instalacja i uruchomienie

### Wymagania wstępne

- Zainstalowany **Node.js** (wersja 18 lub wyższa)
- Zainstalowany menedżer pakietów **npm**
- Klucz API dla **YouTube Data API v3** (Google Cloud Console)
- Klucz API dla **Steam Web API** (steamcommunity.com/dev/apikey)

### Kroki instalacji

**1. Sklonuj repozytorium:**

```bash
git clone https://github.com/bobkikropki/100-Twarzy-Grzybiarzy-Project.git
cd 100-Twarzy-Grzybiarzy-Project
```

**2. Zainstaluj zależności:**

```bash
npm install
```

**3. Skonfiguruj klucze API:**

- Umieść swój klucz Steam API w pliku `SteamKey.txt` w katalogu głównym projektu
- Wstaw klucz YouTube API w pliku `public/dscript.js` w miejscu zmiennej `API_KEY`

**4. Uruchom serwer:**

```bash
node dscript.js
```

lub jeśli zainstalowany jest nodemon:

```bash
npx nodemon dscript.js
```

**5. Otwórz aplikację w przeglądarce:**

```
http://localhost:3000
```

---

## 5. Architektura aplikacji

Aplikacja działa w modelu **klient-serwer**:

```
┌─────────────────────────────────────────────────────────┐
│                     PRZEGLĄDARKA (Klient)                │
│                                                          │
│  index.html ──► script.js ──► Twitch API (GraphQL)      │
│  game.html  ──► game.js   ──► YouTube API (REST)         │
│  SteamLogin ──► dscript.js──► Kick API (REST)            │
│                          └──► Steam API (przez serwer)   │
└──────────────────────────────┬──────────────────────────┘
                               │ HTTP
┌──────────────────────────────▼──────────────────────────┐
│                  SERWER (Node.js + Express)               │
│                                                          │
│  GET /api/steam/:steamId  ──► Steam Web API              │
│  Serwowanie plików statycznych z /public                 │
└─────────────────────────────────────────────────────────┘
```

### Przepływ danych

1. Użytkownik otwiera stronę — serwer Express serwuje pliki statyczne z folderu `public/`
2. JavaScript po stronie klienta inicjuje zapytania do zewnętrznych API
3. Zapytania do Steam API przechodzą przez serwer Node.js (proxy) w celu ukrycia klucza API
4. Dane z Twitch, YouTube i Kick są pobierane bezpośrednio z przeglądarki (z użyciem corsproxy.io)
5. Sesja użytkownika (Steam ID) przechowywana jest w `localStorage` przeglądarki

---

## 6. Opis funkcjonalności

### 6.1 Strona główna (`index.html`)

#### Nawigacja

Stały pasek nawigacyjny na górze strony zawiera:
- Logo projektu
- Linki do sekcji: Strona główna, Statystyki, Wyszukiwarka, Quiz
- Menu użytkownika z awatarem (stan zalogowany/wylogowany ze Steam)

#### Galeria streamów

Karuzela (Flickity) wyświetlająca kolejno:
- Animowane logo projektu (GIF powitalny)
- Transmisje na żywo z YouTube (polskojęzyczny content gamingowy)
- Transmisje z platformy Kick
- Transmisje z platformy Twitch

Każdy kafelek streamu jest klikalny i otwiera okno modalne z odtwarzaczem.

#### Panel statystyk Steam

Po zalogowaniu przez Steam wyświetla:
- Listę gier z biblioteki gracza wraz z czasem rozgrywki
- Sortowanie: wg czasu gry (malejąco), alfabetyczne, ostatnio grane
- Wyszukiwarkę gier z podpowiedziami ze Steam Store API

#### Panel wyszukiwarki YouTube

- Pole wyszukiwania filmów i transmisji na żywo
- Paginacja wyników (przyciski Poprzednia/Następna strona)
- Kliknięcie wyniku otwiera odtwarzacz modalny

#### Stopka

- Linki kontaktowe (Discord, Steam, GitHub)
- Opcje dostępności
- Easter egg: kliknięcie kota w stopce 5 razy wywołuje efekt "jumpscare"

---

### 6.2 Quiz (`game.html`)

Interaktywny quiz wiedzy o grach wideo.

#### Dostępne kategorie

| Kategoria | Liczba pytań w bazie | Pytania na sesję |
|---|---|---|
| Counter-Strike 2 | 21 | 10 (losowe) |
| Wiedźmin 3: Dziki Gon | 15 | 10 (losowe) |
| The Binding of Isaac | 15 | 10 (losowe) |

#### Mechanika quizu

1. Wybór kategorii na ekranie startowym
2. Wyświetlanie po jednym pytaniu z czterema opcjami odpowiedzi (A–D)
3. Po wyborze odpowiedzi natychmiastowy feedback wizualny:
   - Poprawna odpowiedź — podświetlenie na zielono/neon
   - Błędna odpowiedź — podświetlenie na czerwono
4. Automatyczne przejście do następnego pytania
5. Ekran wyników końcowych z liczbą punktów

---

### 6.3 Logowanie Steam (`SteamLogin.html`)

- Wprowadzenie URL profilu Steam
- Pobranie danych gracza (awatar, nazwa) przez Steam Web API
- Zapisanie Steam ID w `localStorage`
- Wyświetlenie statusu logowania
- Możliwość wylogowania

---

## 7. Integracje z zewnętrznymi API

### 7.1 Steam Web API

**Endpoint:** `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/`

Aplikacja pobiera:
- Dane profilu gracza (awatar, nazwa użytkownika, Steam ID)
- Bibliotekę gier z czasami rozgrywki (`IPlayerService/GetOwnedGames`)
- Podpowiedzi wyszukiwania ze Steam Store (`storeapi.steampowered.com`)

Klucz API przechowywany jest po stronie serwera (plik `SteamKey.txt`, dodany do `.gitignore`).

---

### 7.2 Twitch GraphQL API

Aplikacja używa nieoficjalnego endpointu GraphQL Twitcha do pobierania listy aktywnych transmisji. Zaimplementowany jest mechanizm **fallback** — w przypadku awarii głównego zapytania, aplikacja próbuje alternatywnych Client ID. Jeśli wszystkie próby zawiodą, wyświetlany jest link do katalogu Twitch.

---

### 7.3 YouTube Data API v3

**Endpoint:** `https://www.googleapis.com/youtube/v3/search`

Parametry zapytania:
- `type=video`
- `relevanceLanguage=pl` (preferuje polskojęzyczne wyniki)
- `maxResults=10`
- Paginacja przez token `nextPageToken` / `prevPageToken`

---

### 7.4 Kick API

Aplikacja pobiera listę transmisji z platformy Kick korzystając z OAuth Client Credentials. Streamowanie odbywają się przez osadzony odtwarzacz Kick w iframe.

---

## 8. Opis plików źródłowych

### `public/script.js`
Główny plik JavaScript odpowiedzialny za:
- Inicjalizację aplikacji po załadowaniu DOM
- Pobieranie i wyświetlanie streamów z Kick i YouTube
- Obsługę menu nawigacyjnego i menu awatara
- Integrację z biblioteką gier Steam (pobieranie, sortowanie, wyszukiwanie)
- Obsługę odtwarzacza modalnego
- Efekty wizualne (kursor, Easter egg)
- Opcje dostępności

### `public/twitchapi.js`
Moduł odpowiedzialny wyłącznie za integrację z Twitch:
- Zapytania GraphQL do API Twitcha
- Mechanizm fallback z wieloma Client ID
- Renderowanie kafelków streamów Twitch

### `public/game.js`
Logika quizu:
- Baza pytań dla wszystkich trzech kategorii (CS2, Wiedźmin 3, Isaac)
- Losowanie pytań na sesję
- Obsługa odpowiedzi i punktacji
- Renderowanie UI quizu

### `public/dscript.js`
Serwer Express (Node.js):
- Serwowanie plików statycznych z folderu `public/`
- Endpoint proxy `/api/steam/:steamId` — przekazuje zapytania do Steam API z ukrytym kluczem
- Obsługa CORS

### Pliki CSS

| Plik | Zakres stylów |
|---|---|
| `style.css` | Główny layout, nawigacja, karuzela, sekcje paneli |
| `game.css` | Quiz: pytania, odpowiedzi, ekran wyników |
| `dstyle.css` | Dodatkowe style pomocnicze |
| `tile2.css` | Kafelki streamów |
| `emebeded-content.css` | Modal z odtwarzaczem |
| `Steamlogin.css` | Strona logowania Steam |

---

## 9. Interfejs użytkownika

### Styl wizualny

Aplikacja stosuje styl **glassmorphism** — elementy interfejsu mają efekt matowego szkła uzyskany za pomocą:

```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Animacje i efekty

- Płynne przejścia (CSS transitions) przy hover i pojawianiu się elementów
- Efekt trail kursora (magiczny ślad za myszką)
- Gradient tła z animacją

### Responsywność

Układ strony oparty jest na **CSS Flexbox** i **CSS Grid**, co zapewnia poprawne wyświetlanie na różnych rozdzielczościach ekranu.

---

## 10. Dostępność (Accessibility)

Aplikacja udostępnia panel opcji dostępności w stopce strony z następującymi trybami:

| Opcja | Opis |
|---|---|
| Tryb daltonisty (Protanopia) | Zmienia paletę kolorów na przyjazną dla osób z protanopią (ślepota na czerwień) |
| Wysoki kontrast tekstu | Zwiększa kontrast czcionek dla lepszej czytelności |
| Powiększenie czcionki | Zwiększa rozmiar czcionki o 20% |

Ustawienia są przełączane dynamicznie przez JavaScript bez przeładowania strony.

---

## 11. Znane ograniczenia

| Ograniczenie | Opis |
|---|---|
| Klucz YouTube API | Wymaga uzupełnienia własnym kluczem API — bez niego wyszukiwarka filmów nie działa |
| CORS Proxy | Aplikacja używa zewnętrznego serwisu corsproxy.io do niektórych zapytań, co może powodować opóźnienia lub niedostępność |
| Twitch API | Używa nieoficjalnego endpointu GraphQL, który może przestać działać po zmianach po stronie Twitcha |
| Brak internacjonalizacji | Interfejs dostępny wyłącznie w języku polskim |
| Obrazy w quizie | Kategorie Wiedźmin 3 i Isaac nie mają przypisanych obrazów do pytań |
| localStorage | Sesja Steam przechowywana lokalnie w przeglądarce — brak synchronizacji między urządzeniami |

---

*Dokumentacja wygenerowana na potrzeby sprawozdania z przedmiotu: Narzędzia Procesu Tworzenia Oprogramowania.*
