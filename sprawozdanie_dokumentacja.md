# Dokumentacja techniczna jako narzędzie procesu tworzenia oprogramowania

## Czym jest dokumentacja techniczna?

Dokumentacja techniczna to zbiór opisów, instrukcji i informacji dotyczących danego projektu programistycznego. Jej celem jest przekazanie wiedzy o projekcie — zarówno osobom, które go tworzą, jak i tym, które będą z niego korzystać lub go rozwijać w przyszłości.

Dobra dokumentacja odpowiada na trzy podstawowe pytania:
- **Co** robi projekt?
- **Jak** go uruchomić i używać?
- **Dlaczego** został zaprojektowany w dany sposób?

---

## Po co się ją tworzy?

Dokumentacja jest integralną częścią procesu tworzenia oprogramowania — nie jest dodatkiem, lecz pełnoprawnym elementem projektu. Jej brak sprawia, że projekt staje się „czarną skrzynką": działa, ale nikt poza autorami (a często nawet i oni, po pewnym czasie) nie wie jak, dlaczego i w jaki sposób.

Główne powody tworzenia dokumentacji:

**Onboarding nowych członków zespołu** — osoba dołączająca do projektu może samodzielnie zapoznać się z jego strukturą, technologiami i sposobem uruchomienia bez potrzeby angażowania reszty zespołu.

**Powrót do projektu po przerwie** — po kilku tygodniach lub miesiącach przerwy nawet autor kodu może zapomnieć szczegóły implementacji. Dokumentacja pozwala szybko odświeżyć wiedzę.

**Odtworzenie środowiska** — sekcja instalacji i konfiguracji pozwala każdej osobie uruchomić projekt na swoim komputerze, bez zgadywania jakie klucze API są potrzebne lub jak skonfigurować środowisko.

**Zrozumienie architektury** — opis struktury projektu i przepływu danych ułatwia orientację w kodzie, szczególnie w większych projektach.

**Komunikacja z innymi** — dokumentacja jest formą komunikacji między programistami, a jej istnienie świadczy o profesjonalnym podejściu do projektu.

---

## Dokumentacja w projekcie „100 Twarzy Grzybiarzy"

W ramach projektu powstała dokumentacja techniczna w pliku `DOKUMENTACJA.md`, obejmująca wszystkie kluczowe aspekty aplikacji.

### Zawartość dokumentacji

**Opis projektu** — sekcja przedstawiająca ogólny cel i charakter aplikacji: centrum rozrywki dla graczy łączące przeglądarkę streamów z wielu platform, integrację ze Steam oraz quiz wiedzy o grach.

**Technologie i zależności** — zestawienie wszystkich wykorzystanych technologii w formie tabel, z podziałem na backend, frontend i zewnętrzne API. Pozwala szybko ocenić wymagania projektu.

**Struktura projektu** — wizualny diagram drzewa katalogów z opisem każdego pliku. Dzięki tej sekcji nowa osoba od razu wie gdzie szukać konkretnej funkcjonalności.

**Instalacja i uruchomienie** — instrukcja krok po kroku jak sklonować repozytorium, zainstalować zależności, skonfigurować klucze API i uruchomić serwer. Bez tej sekcji uruchomienie projektu wymagałoby analizy kodu.

**Architektura aplikacji** — diagram modelu klient-serwer pokazujący przepływ danych między przeglądarką, serwerem Express i zewnętrznymi API.

**Opis funkcjonalności** — szczegółowy opis wszystkich funkcji aplikacji: galerii streamów, panelu Steam, wyszukiwarki YouTube, quizu i opcji dostępności.

**Integracje z zewnętrznymi API** — opis każdego z czterech zintegrowanych API (Steam, Twitch, YouTube, Kick) z podaniem konkretnych endpointów i parametrów zapytań.

**Znane ograniczenia** — tabela z opisem znanych problemów i ograniczeń projektu. Ta sekcja jest często pomijana w dokumentacjach, a jest bardzo ważna — uczciwie informuje o tym, czego aplikacja nie robi lub czego wymaga do działania.

---

## Podsumowanie

Tworzenie dokumentacji jest jednym z kluczowych narzędzi procesu tworzenia oprogramowania. Projekt „100 Twarzy Grzybiarzy" posiada kompletną dokumentację techniczną, która opisuje wszystkie aspekty aplikacji — od instalacji, przez architekturę, po znane ograniczenia. Dokumentacja ta umożliwia każdej osobie samodzielne uruchomienie i zrozumienie projektu bez potrzeby konsultacji z autorami.
