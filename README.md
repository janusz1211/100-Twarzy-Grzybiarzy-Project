# Dokumentacja Techniczna i Użytkowa Projektu „100 TWARZY GRZYBIARZY”

---

## 1. Wstęp i Metadane Projektu
* **Nazwa Projektu:** 100 TWARZY GRZYBIARZY
* **Autorzy / Twórcy:** SIGMY
* **Rok powstania:** 2026
* **Przeznaczenie:** Multimedialny hub rozrywkowo-statystyczny integrujący zewnętrzne usługi API (Steam, YouTube, Twitch) z interaktywnymi komponentami grywalnymi (Quiz) oraz zaawansowanymi funkcjami ułatwień dostępu (A11y).
* **Środowisko uruchomieniowe:** Przeglądarka internetowa (wymagane uruchomienie przez serwer lokalny, np. Live Server, ze względu na politykę bezpieczeństwa iframe i osadzania zewnętrznych odtwarzaczy).

---

## 2. Architektura Systemu i Struktura Plików

Projekt został zaprojektowany w architekturze czysto klienckiej (Front-End) z wykorzystaniem semantycznego HTML5, kaskadowych arkuszy stylów (CSS3) z elementami zmiennych i warstwowości oraz asynchronicznego JavaScriptu (ES6+). Do ominięcia restrykcji CORS przy bezpośrednich zapytaniach do API Steam wykorzystano zewnętrzne proxy.

### Wykaz i Kategoryzacja Plików:

#### Pliki Struktury (HTML):
* `index.html` – Główna strona (Hub) zawierająca akordeonowy slider platform streamingowych.
* `statystyki.html` – Podstrona dedykowana integracji z platformą Steam (profil, gry, czas spędzony w grach).
* `SteamLogin.html` – Interfejs autoryzacji/powiązania konta Steam przy użyciu identyfikatorów profilu.
* `YtSearch.html` – Podstrona z wyszukiwarką wideo YouTube oraz dynamicznym odtwarzaczem modalnym.
* `game.html` – Interfejs autokontenerowego quizu wiedzy o grach komputerowych (np. Counter-Strike 2).

#### Pliki Logiki (JavaScript):
* `slider.js` – Logika rozwijania, zwijania i poziomowania pochylonych paneli platform streamingowych.
* `SteamAPI.js` – Silnik integracji z API Steam (pobieranie danych użytkownika, parsowanie vanity URL, pobieranie gier i czasu rozgrywki).
* `Youtube.js` – Integracja z YouTube Data API v3, mechanizm wyszukiwania, paginacji i generowania odtwarzacza modalnego.
* `Twitch.js` – Integracja z Twitch GraphQL API oraz system bezpiecznego osadzania ramek iframe z dynamicznym mapowaniem hosta.
* `game.js` – Logika biznesowa quizu (baza pytań, walidacja odpowiedzi, naliczanie punktów, efekty wizualne).
* `theme.js` – Zarządzanie jasnym/ciemnym motywem graficznym z zapisem stanu w pamięci podręcznej.
* `KICK+wyszukiwanie.js` – Skrypt narzędziowy obsługujący menu profilu, panel dostępności (A11y) oraz globalne efekty wizualne (Cursor Trail).

#### Pliki Stylów (CSS):
* `style.css` – Globalny arkusz stylów, resetowanie stylów, definicja paska górnego (`#gora-pasek`) oraz stopki (`main-footer`).
* `slider.css` & `slider-button.css` – Zaawansowane style akordeonu (pochylenie sekcji za pomocą `skewX`, animacje przejścia, stylizacja przycisku zamykania).
* `statystyki.css` & `steamAPI.css` – Układ siatki profilu Steam, tabele informacyjne SteamDB, efekty rozmycia tła (`backdrop-filter`) oraz animacje odznaki "Live".
* `Steamlogin.css` – Stylowanie formularza logowania, gradienty przycisków oraz zachowanie menu bocznego.
* `Youtube.css` – Definicja siatki wyników wideo, okna modalnego i stylizacji odtwarzacza.
* `game.css` – Efekt *glassmorphism* (matowe szkło) dla panelu gry, pozycjonowanie absolutne elementów i klasy poprawnych/błędnych odpowiedzi.
* `theme.css` – Nadpisywanie kolorystyki elementów (kolory pastelowo-różowe/bordowe) w przypadku aktywacji jasnego motywu (`data-theme="light"`).
* `emebeded-content.css` – Wygląd kart informacyjnych platform Twitch i Kick, warstwy gradientowe, etykiety statusu "Na Żywo".

---

## 3. Szczegółowy Opis Modułów Funkcjonalnych

### Moduł A: Hub Strumieniowy (Strona Główna)
Głównym elementem strony `index.html` jest innowacyjny akordeon multimedialny (`.streams-accordion`) zarządzany przez `slider.js` i stylizowany w `slider.css`.
* **Mechanika Wizualna:** Panele platform (Twitch, YouTube, Kick) są domyślnie pochylone o kąt -15 stopni (`transform: skewX(-15deg)`), a ich wewnętrzny wrapper odkręca zawartość o +15 stopni, aby zachować pion tekstu i grafik.
* **Interakcja:** Kliknięcie w dany panel powoduje nadanie klasy `.is-active`. Panel rozszerza się do pełnej szerokości ekranu (`flex: 1` przechodzi w maksymalny wymiar) i prostuje się (`skewX(0deg)`). Pozostałe panele otrzymują klasę `.is-hidden` i ulegają zwężeniu.
* **Osadzanie Treści:** Po wyprostowaniu panelu pojawia się przycisk zamykania (`.close-panel-btn`) oraz dynamicznie ładowana zawartość multimedialna (streamy na żywo pobierane asynchronicznie).

### Moduł B: Integracja z API Steam (Statystyki)
Zlokalizowany na podstronie `statystyki.html`, napędzany przez skrypt `SteamAPI.js`.
* **Autoryzacja i Identyfikacja:** System pobiera wprowadzony przez użytkownika link do profilu Steam. Obsługuje zarówno bezpośrednie identyfikatory 64-bitowe (SteamID64), jak i niestandardowe adresy tekstowe (Vanity URL). W przypadku Vanity URL skrypt wykonuje asynchroniczne zapytanie do metody `ResolveVanityURL` w celu skonwertowania tekstu na numeryczne ID.
* **Ominięcie CORS:** Żądania sieciowe wysyłane są przez bramkę `https://corsproxy.io/?`, co zapobiega blokowaniu zapytań przez mechanizmy bezpieczeństwa przeglądarki.
* **Pobieranie i Prezentacja Danych:**
  * Wykorzystuje metodę `GetPlayerSummaries` do pobrania awatara, pseudonimu i statusu użytkownika.
  * Wykorzystuje metodę `GetOwnedGames` (z flagą `include_appinfo=true`) do pobrania pełnej listy gier zakupionych przez użytkownika wraz z czasem spędzonym w każdej z nich.
  * Dane są automatycznie sortowane (np. od najpopularniejszych gier), a interfejs oferuje stronicowanie (porcje po 10 gier) w celu optymalizacji wydajności renderowania DOM.
  * Tło panelu profilu dynamicznie pobiera grafikę z aktualnie wybranej gry, nakładając silne rozmycie (`filter: blur(50px) brightness(0.22)`).

### Moduł C: Wyszukiwarka i Odtwarzacz YouTube
Moduł zawarty w `YtSearch.html` oraz `Youtube.js` umożliwia przeszukiwanie zasobów YouTube bezpośrednio z poziomu aplikacji.
* **Mechanizm wyszukiwania:** Formularz przesyła zapytanie tekstowe do endpointu `googleapis.com/youtube/v3/search`, filtrując wyniki według typu (`type=video`) oraz średniej długości (`videoDuration=medium`).
* **Paginacja:** Skrypt implementuje obsługę tokenu `nextPageToken`, co pozwala użytkownikowi na ładowanie kolejnych partii wyników (przycisk "Załaduj więcej") bez resetowania aktualnego stanu wyszukiwania.
* **Odtwarzacz Modalny:** Kliknięcie w kartę wideo nie przekierowuje na zewnętrzną stronę, lecz aktywuje okno modalne (`#video-modal`). Do ramki `iframe` wstrzykiwany jest adres `https://www.youtube.com/embed/{videoId}?autoplay=1&mute=1`. Kontrolę nad zamknięciem okna i zatrzymaniem odtwarzania sprawuje funkcja `closeModal()`.

### Moduł D: Grywalne Centrum Quizu
Interaktywny teleturniej zaimplementowany w `game.html` i `game.js`.
* **Struktura Danych:** Pytania pogrupowane są tematycznie (np. kategoria 'CS2'). Każdy obiekt pytania zawiera treść (`q`), tablicę czterech potencjalnych odpowiedzi (`a`) oraz indeks poprawnej odpowiedzi (`correct`).
* **Algorytm rozgrywki:** Gra losuje lub sekwencyjnie pobiera pulę 10 pytań. Po kliknięciu w przycisk odpowiedzi, skrypt blokuje możliwość ponownego kliknięcia, sprawdza poprawność i aplikuje odpowiednie klasy CSS: `.correct` (jaskrawa zieleń) dla poprawnej odpowiedzi oraz `.wrong` (czerwień) w przypadku pomyłki (jednocześnie podświetlając prawidłową opcję). Po opóźnieniu 1500ms następuje przejście do kolejnego kroku.
* **Podsumowanie:** Po zakończeniu serii 10 pytań, ekran aktywny jest ukrywany, a oczom gracza ukazuje się podsumowanie wyników (`#result-screen`) z opcją ponownego uruchomienia sesji (`location.reload()`).

### Moduł E: System Dostępności (A11y) oraz Motywów
Projekt kładzie duży nacisk na równe szanse w dostępie do treści, co realizowane jest poprzez panel boczny dostępny na każdej podstronie.
* **Zarządzanie Motywem:** Skrypt `theme.js` nasłuchuje zmian na przełączniku motywu `#theme-toggle`. W przypadku aktywacji motywu jasnego, do elementu głównego dokumentu dodawany jest atrybut `data-theme="light"`. Plik `theme.css` redefiniuje wówczas globalne zmienne i style, zmieniając mroczną estetykę Steam/Gaming na jasną, pastelowo-różową paletę kolorów. Stan motywu jest zapisywany w `localStorage ('theme', 'light'/'dark')`, dzięki czemu preferencje użytkownika są zachowywane przy przechodzeniu między podstronami.
* **Ułatwienia Dostępności (A11y):** Panel oferuje trzy kluczowe filtry:
  1. **Tryb dla daltonistów (Protanopia):** Wprowadza specjalne mapowanie barw (głównie korekta czerwieni i zieleni w interfejsie).
  2. **Wysoki kontrast (Tekst):** Zwiększa współczynnik kontrastu tekstu względem tła do zgodności ze standardami WCAG.
  3. **Większa czcionka (+20%):** Przeskalowuje bazowy rozmiar fontu w celu ułatwienia czytania osobom niedowidzącym.

### Moduł F: Dodatki Wizualne i Easter Eggi
* **Cursor Trail (Smuga Magiczna):** W skrypcie `KICK+wyszukiwanie.js` zaimplementowano detektor ruchu myszy. Każde przesunięcie kursora generuje w strukturze DOM nowy element `div` o klasie `.magic-trail`, pozycjonowany na współrzędnych `e.clientX` i `e.clientY`. Element ten płynnie zanika (`opacity = '0'`) i ulega przesunięciu/skalowaniu za pomocą animacji CSS, po czym jest usuwany, co daje efekt płynnego "ogona wizualnego".
* **Footer Cat:** W dolnej części strony `index.html` znajduje się wrapper `#footer-cat` zawierający grafikę stylizowanego kota, stanowiący podpis humorystyczny twórców.
* **Secret Jumpscare Egg:** Ukryty element strukturalny `#secret-egg` zawierający grafikę Jumpscare. Jest on aktywowany specyficzną sekwencją zdarzeń lub kliknięć, wprowadzając element zaskoczenia.

---

## 4. Wykaz Kluczy API i Zależności Zewnętrznych

W kodzie źródłowym zaszyto produkcyjne klucze dostępowe do usług (uwaga: w środowiskach komercyjnych zaleca się przeniesienie ich na stronę backendu/zmiennych środowiskowych w celu uniknięcia kradzieży limitów zapytań):
1. **Steam API Key:** `23CAC94E18CA36E7EA73EC975739CDBE` (używany do autoryzacji zapytań na serwerach Valve).
2. **YouTube Data API v3 Key:** `AIzaSyBqbummZzueGCF453eWd0B4i73QPiPAQG8` (używany do autoryzacji żądań wyszukiwania wideo).
3. **Zależności CSS:** Font Awesome v6.0.0 (pobierany z zewnętrznego serwera CDN Cloudflare do obsługi wszystkich ikon interfejsu).
4. **Proxy:** `https://corsproxy.io/?` wykorzystywane jako zapośredniczenie żądań sieciowych typu HTTP GET.

---

## 5. Przegląd i Konfiguracja Kodu w Plikach

### Zarządzanie Pamięcią Podręczną (LocalStorage)
Aplikacja utrzymuje ciągłość sesji i personalizacji za pomocą natywnego mechanizmu `localStorage` przeglądarki:
* `localStorage.getItem('theme')` – decyduje o załadowaniu motywu przy starcie.
* `localStorage.getItem('zapisaneSteamID')` – przechowuje zweryfikowane ID użytkownika Steam, automatycznie ładując jego profil przy ponownym wejściu na zakładkę statystyk, bez konieczności ponownego wklejania linku.

### Obsługa Błędów w Zapytaniach Asynchronicznych
Wszystkie operacje sieciowe (w plikach `SteamAPI.js`, `Youtube.js`, `Twitch.js`) zostały obudowane w bloki kontrolne `try...catch`. W przypadku awarii sieci, wygaśnięcia klucza API lub podania błędnych danych przez użytkownika, aplikacja nie ulega zawieszeniu (nie rzuca krytycznego wyjątku uniemożliwiającego dalszą pracę), lecz wstrzykuje do kontenerów wynikowych czytelne komunikaty o błędach w kolorze czerwonym (np. `<p style='color: #ff4d4d;'>... </p>`).

---

## 6. Instrukcja Uruchomienia Projektu

Ze względu na zaawansowane mechanizmy osadzania treści i bezpieczeństwo przeglądarek (zabezpieczenia przed Cross-Origin), bezpośrednie kliknięcie pliku `index.html` z dysku lokalnego (protokół `file:///`) spowoduje niepoprawne działanie odtwarzaczy Twitch oraz problem z mapowaniem nagłówków dla niektórych funkcji.

### Kroki Wdrożenia Lokalnego:
1. Upewnij się, że wszystkie 22 pliki znajdują się w jednym, wspólnym katalogu roboczym z zachowaniem integralności nazw.
2. Uruchom edytor kodu (np. *Visual Studio Code*).
3. Zainstaluj rozszerzenie **Live Server** lub dowolny lokalny serwer HTTP (np. NodeJS `http-server`).
4. Kliknij prawym przyciskiem myszy na plik `index.html` i wybierz opcję **"Open with Live Server"**.
5. Projekt otworzy się pod adresem sieciowym lokalnego hosta (zazwyczaj `http://127.0.0.1:5500/index.html`), co zagwarantuje pełną funkcjonalność modułów społecznościowych, integracji wideo i skryptów ułatwień dostępu.
