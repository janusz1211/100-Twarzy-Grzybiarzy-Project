const quizData = {
    'CS2': [
        { q: 'Ile trwa animacja ściągania tłumika z USP?', a: ['2s', '4s', '5s', '6s'], correct: 1 },
        { q: 'Ile zapłacisz za AWP w CS2?', a: ['4500$', '3750$', '4750$', '5000$'], correct: 2 },
        { q: 'W którym roku wyszło Counter-Strike: Global Offensive?', a: ['2011', '2012', '2013', '2014'], correct: 1 },
        { q: 'Na której z map znajduje się pomnik rycerza z oszczepem?', a: ['Cobblestone', 'Mirage', 'Overpass', 'Nuke'], correct: 0 },
        { q: 'Ile jest domyślnych trybów (sugerowanych przez Valve) w CS2?', a: ['6', '5', '8', '7'], correct: 3 },
        { q: 'Którą broń najszybciej przeładujesz w CS2?', a: ['P250', 'AK-47', 'AWP', 'MAG-7'], correct: 0 },
        { q: 'Która z operacji wyszła w 2015 roku?', a: ['Bravo', 'Vanguard', 'Breakout', 'Bloodhound'], correct: 3 },
        { q: 'Ile kosztuje SSG 08 (Scout) w CS2?', a: ['1700$', '1300$', '2100$', '1500$'], correct: 0 },
        { q: 'Ile kosztuje Nova w CS2?', a: ['1500$', '1200$', '1050$', '900$'], correct: 2 },
        { q: 'Counter-Strike był oryginalnie modyfikacją do:', a: ['Unreal Tournament', 'Call of Duty', 'Half-Life', 'Quake 3 Arena'], correct: 2 },
        { q: 'Który z wymienionych karabinów ma najmniejszy efektywny zasięg?', a: ['Galil AR', 'FAMAS', 'M4A1-S', 'AK-47'], correct: 1 },
        { q: 'Ile wynosi maksymalna nagroda za zabójstwo nożem w trybie Turniejowym?', a: ['3000$', '1200$', '900$', '1500$'], correct: 3 },
        { q: 'Jak długo utrzymuje się granat dymny w CS2?', a: ['12 sekund', '18 sekund', '15 sekund', '20 sekund'], correct: 1 },
        { q: 'Ile wynosi nagroda za zabójstwo przy użyciu CZ75-Auto?', a: ['100$', '0$', '600$', '300$'], correct: 0 },
        { q: 'Ile wynosi czas do wybuchu bomby od momentu jej podłożenia?', a: ['35 sekund', '40 sekund', '45 sekund', '30 sekund'], correct: 1 },
        { q: 'Ile nabojów mieści magazynek AK-47 w CS2?', a: ['25', '30', '20', '35'], correct: 1 },
        { q: 'Ile kosztuje pełna zbroja (kamizelka + hełm) w CS2?', a: ['1000$', '1150$', '650$', '800$'], correct: 0 },
        { q: 'Który pistolet jest domyślną bronią Terrorystów w CS2?', a: ['P2000', 'Glock-18', 'USP-S', 'Desert Eagle'], correct: 1 },
        { q: 'Ile sekund trwa defuzowanie bomby BEZ zestawu saperskiego?', a: ['10 sekund', '8 sekund', '15 sekund', '12 sekund'], correct: 0 },
        { q: 'Ile sekund trwa defuzowanie bomby Z zestawem saperskim?', a: ['5 sekund', '3 sekundy', '7 sekund', '10 sekund'], correct: 0 },
        { q: 'Na której z map CS2 znajduje się bombsite "Rynek"?', a: ['Inferno', 'Nuke', 'Ancient', 'Anubis'], correct: 2 },
    ],
'Wiedźmin': [
        { q: 'Z jakiej szkoły wiedźmińskiej pochodzi Geralt?', a: ['Szkoły Kota', 'Szkoły Gryfa', 'Szkoły Wilka', 'Szkoły Żmii'], correct: 2 },
        { q: 'Jak ma na imię wierny koń Geralta?', a: ['Plotka', 'Płotka', 'Roach', 'Kasztanka'], correct: 1 },
        { q: 'Kim z zawodu jest Jaskier?', a: ['Wiedźminem', 'Kupcem', 'Bardem', 'Medykiem'], correct: 2 },
        { q: 'Który znak wiedźmiński tworzy magiczną tarczę ochronną?', a: ['Igni', 'Aard', 'Quen', 'Axii'], correct: 2 },
        { q: 'Jak nazywa się przybrana córka Geralta?', a: ['Triss', 'Yennefer', 'Keira', 'Ciri'], correct: 3 },
        { q: 'Która gra karciana jest uwielbiana przez mieszkańców Kontynentu?', a: ['Gwint', 'Kości', 'Pasjans', 'Poker'], correct: 0 },
        { q: 'Kto jest cesarzem Nilfgaardu w grze Wiedźmin 3?', a: ['Foltest', 'Emhyr var Emreis', 'Radowid', 'Dijkstra'], correct: 1 },
        { q: 'Jak nazywa się żona Krwawego Barona?', a: ['Tamara', 'Keira', 'Anna', 'Priscilla'], correct: 2 },
        { q: 'Który eliksir najszybciej regeneruje żywotność Geralta?', a: ['Grom', 'Jaskółka', 'Biały Miód', 'Puszczyk'], correct: 1 },
        { q: 'Jak ma na imię główny antagonista, Król Dziki Gon?', a: ['Imlerith', 'Caranthir', 'Eredin', 'Avallac\'h'], correct: 2 },
        { q: 'W którym rejonie znajduje się Akademia Oxenfurcka?', a: ['W Redanii', 'W Temerii', 'Na Skellige', 'W Toussaint'], correct: 0 },
        { q: 'Który z tych potworów zaliczany jest do wampirów wyższych?', a: ['Alp', 'Bruxa', 'Garkain', 'Regis'], correct: 3 },
        { q: 'Co jest główną słabością wilkołaków?', a: ['Złoto', 'Ogień', 'Srebro i pył księżycowy', 'Żelazo'], correct: 2 },
        { q: 'Jak nazywa się pierwszy duży dodatek fabularny do Wiedźmina 3?', a: ['Krew i Wino', 'Serca z Kamienia', 'Dziki Gon', 'Zabójcy Królów'], correct: 1 },
        { q: 'Kim są przerażające istoty rządzące Krzywuchowymi Moczarami?', a: ['Wampirami', 'Wiedźmami (Prządka, Tkaczka, Szepciucha)', 'Utopcami', 'Leszymi'], correct: 1 }
    ],
    'Isaac': [
        { q: 'Jaki przedmiot zmienia łzy Isaaca w potężny, krwawy laser?', a: ['Sacred Heart', 'Brimstone', 'Godhead', 'Polyphemus'], correct: 1 },
        { q: 'Jak nazywa się postać, która zaczyna grę tylko z niebieskimi sercami (Soul Hearts)?', a: ['Azazel', 'Magdalene', '??? (Blue Baby)', 'Eve'], correct: 2 },
        { q: 'Które pomieszczenie pozwala zdobyć silne przedmioty kosztem pojemników na serca?', a: ['Treasure Room', 'Angel Room', 'Devil Room', 'Secret Room'], correct: 2 },
        { q: 'Co robi kostka "The D6", z którą startuje Isaac (po jej odblokowaniu)?', a: ['Zmienia statystyki', 'Zmienia przedmioty na piedestałach', 'Odnawia zdrowie', 'Zabija wszystkich wrogów'], correct: 1 },
        { q: 'Z ilu części składa się potomek (chowaniec) "Super Meat Boy"?', a: ['2', '3', '4', '5'], correct: 2 },
        { q: 'Co daje zebranie trzech przedmiotów z zestawu kota Guppy\'ego?', a: ['Nieśmiertelność', 'Zdolność latania i generowanie much', 'Nieskończone bomby', 'Brimstone'], correct: 1 },
        { q: 'Ile wynosi podstawowy limit monet (bez specjalnych itemów), jaki może unieść gracz?', a: ['50', '99', '100', '999'], correct: 1 },
        { q: 'Kto jest ostatecznym bossem w lokacji "The Chest"?', a: ['The Lamb', 'Mega Satan', '??? (Blue Baby)', 'Hush'], correct: 2 },
        { q: 'Co robi karta Tarota "The Fool"?', a: ['Zabija gracza', 'Daje darmowy przedmiot', 'Teleportuje na początek aktualnego piętra', 'Odkrywa całą mapę'], correct: 2 },
        { q: 'Jak nazywa się klątwa (Curse), która ukrywa wygląd przedmiotów przed ich podniesieniem?', a: ['Curse of the Blind', 'Curse of the Lost', 'Curse of the Unknown', 'Curse of the Labyrinth'], correct: 0 },
        { q: 'Który z bossów z pierwszych pięter wygląda jak gigantyczna mucha?', a: ['Monstro', 'Pin', 'Duke of Flies', 'Gurdy'], correct: 2 },
        { q: 'Która postać w grze strzela krótkim, laserowym zionięciem od samego początku?', a: ['Azazel', 'Samson', 'Cain', 'Judas'], correct: 0 },
        { q: 'Jak nazywają się dwie postacie, którymi gracz steruje w tym samym czasie?', a: ['Isaac i Guppy', 'Jacob i Esau', 'Eden i Eve', 'Samson i Delilah'], correct: 1 },
        { q: 'Co znajduje się w złotych (Golden) skrzynkach?', a: ['Tylko klucze', 'Przedmioty użytkowe i monety', 'Zawsze przedmioty aktywne', 'Bossowie'], correct: 1 },
        { q: 'Jaki jest główny cel (fabularny) Isaaca uciekającego do piwnicy?', a: ['Szukanie skarbu', 'Ucieczka przed matką', 'Zabicie potworów', 'Rozwiązanie zagadki'], correct: 1 }
    ],
    'FinalFantasy': [
        { q: 'Jak na imię ma główny bohater Final Fantasy VII?', a: ['Squall', 'Cloud Strife', 'Lightning', 'Tidus'], correct: 1 },
        { q: 'Jak nazywa się ikoniczna broń Clouda w Final Fantasy VII?', a: ['Buster Sword', 'Brotherhood', 'Excalibur', 'Fusion Sword'], correct: 0 },
        { q: 'Jak nazywa się główny antagonista Final Fantasy VII?', a: ['Kefka', 'Sephiroth', 'Exdeath', 'Kuja'], correct: 1 },
        { q: 'Czyją ikoniczną bronią jest długi miecz "Masamune" w Final Fantasy VII?', a: ['Cloud', 'Vincent', 'Sephiroth', 'Zack'], correct: 2 },
        { q: 'Do jakiej grupy oporu dołącza Cloud na początku Final Fantasy VII?', a: ['SOLDIER', 'AVALANCHE', 'Turks', 'Shinra'], correct: 1 },
        { q: 'Jak nazywa się Starożytna (Cetra), przyjaciółka Clouda w Final Fantasy VII?', a: ['Tifa', 'Aerith', 'Yuffie', 'Elena'], correct: 1 },
        { q: 'Jak na imię ma główny bohater Final Fantasy VIII?', a: ['Cloud', 'Squall Leonhart', 'Zidane', 'Vaan'], correct: 1 },
        { q: 'Jak nazywa się szkoła wojskowa i organizacja, do której należy Squall w Final Fantasy VIII?', a: ['SOLDIER', 'SeeD / Balamb Garden', 'Akademia Galbadia', 'Strahl'], correct: 1 },
        { q: 'Jak na imię ma główny bohater Final Fantasy IX?', a: ['Vaan', 'Cloud', 'Zidane Tribal', 'Tidus'], correct: 2 },
        { q: 'Jak na imię ma główny bohater Final Fantasy X?', a: ['Zidane', 'Squall', 'Tidus', 'Vaan'], correct: 2 },
        { q: 'Kto jest ojcem Tidusa w Final Fantasy X?', a: ['Auron', 'Jecht', 'Braska', 'Wakka'], correct: 1 },
        { q: 'Jak nazywa się ogromny potwór terroryzujący świat Spira w Final Fantasy X?', a: ['Ultimecia', 'Necron', 'Sin', 'Chaos'], correct: 2 },
        { q: 'Jak na imię ma główna bohaterka Final Fantasy XIII?', a: ['Terra', 'Tifa', 'Lightning', 'Yuna'], correct: 2 },
        { q: 'Jak nazywa się główny antagonista Final Fantasy VI?', a: ['Sephiroth', 'Exdeath', 'Kefka Palazzo', 'Garland'], correct: 2 },
        { q: 'W którym Final Fantasy pojawia się postać Terra Branford?', a: ['Final Fantasy IV', 'Final Fantasy V', 'Final Fantasy VI', 'Final Fantasy VII'], correct: 2 },
        { q: 'Który summon symbolizuje ogień w serii Final Fantasy?', a: ['Shiva', 'Ifrit', 'Bahamut', 'Leviathan'], correct: 1 },
        { q: 'Który summon symbolizuje lód w serii Final Fantasy?', a: ['Ifrit', 'Ramuh', 'Shiva', 'Titan'], correct: 2 },
        { q: 'Jak nazywa się najpotężniejszy smok-summon, pojawiający się w niemal każdej grze serii?', a: ['Ifrit', 'Shiva', 'Bahamut', 'Odin'], correct: 2 },
        { q: 'Który przedmiot wskrzesza poległą (KO) postać w grach Final Fantasy?', a: ['Hi-Potion', 'Ether', 'Phoenix Down', 'Elixir'], correct: 2 },
        { q: 'W którym Final Fantasy po raz pierwszy wprowadzono system ATB (Active Time Battle)?', a: ['Final Fantasy III', 'Final Fantasy IV', 'Final Fantasy V', 'Final Fantasy VI'], correct: 1 },
        { q: 'Jak nazywa się świat, w którym toczy się akcja Final Fantasy XIV?', a: ['Spira', 'Ivalice', 'Hydaelyn', 'Gaia'], correct: 2 },
        { q: 'Ile numerowanych głównych gier z serii Final Fantasy wydano do końca 2023 roku?', a: ['13', '14', '15', '16'], correct: 3 },
        { q: 'Jak nazywa się słynna opera w Final Fantasy VI, w której uczestniczy Celes?', a: ['Maria i Draco', 'Romeo i Julia', 'Phantom i Celes', 'Sen Wróżki'], correct: 0 },
        { q: 'Który z tych bohaterów posiada zdolność wzywania Eidolonów w Final Fantasy IX?', a: ['Garnet', 'Vivi', 'Zidane', 'Freya'], correct: 0 },
        { q: 'Jak nazywa się technika Limit Break, którą Cloud używa w finale walki z Sephirothem?', a: ['Cross Slash', 'Braver', 'Omnislash', 'Meteorain'], correct: 2 },
        { q: 'Jak nazywa się magiczne miasto w chmurach w Final Fantasy IX?', a: ['Alexandria', 'Lindblum', 'Madain Sari', 'Memoria'], correct: 1 },
        { q: 'Jak nazywa się organizacja-korporacja będąca głównym antagonistą w Final Fantasy VII?', a: ['SeeD', 'SOLDIER', 'Shinra Electric Power Company', 'Cetra'], correct: 2 },
        { q: 'Co robi Odin, gdy zostaje wezwany w większości gier Final Fantasy?', a: ['Leczy całą drużynę', 'Wzywa deszcz meteorytów', 'Natychmiastowo zabija wrogów ciosem miecza', 'Zamraża wszystkich wrogów'], correct: 2 },
        { q: 'Jak nazywa się wróg końcowy (true final boss) w Final Fantasy IX?', a: ['Garland', 'Kuja', 'Necron', 'Trance Kuja'], correct: 2 },
        { q: 'W której grze Final Fantasy pojawia się postać Auron, znana jako "guardian"?', a: ['Final Fantasy VIII', 'Final Fantasy IX', 'Final Fantasy X', 'Final Fantasy XII'], correct: 2 },
    ],
    'Minecraft': [
        { q: 'Ile serc życia posiada gracz w standardowym Minecraft?', a: ['8', '10', '12', '20'], correct: 1 },
        { q: 'Jak nazywa się główny bos zamieszkujący wymiar The End?', a: ['Wither', 'Ender Dragon', 'Elder Guardian', 'Ravager'], correct: 1 },
        { q: 'Z ilu bloków obsydianu składa się minimalny portal do Netheru?', a: ['8', '10', '12', '14'], correct: 1 },
        { q: 'Który mob atakuje gracza wyłącznie gdy na niego spojrzysz?', a: ['Creeper', 'Zombie', 'Enderman', 'Blaze'], correct: 2 },
        { q: 'Ile diamentów potrzeba do skompletowania pełnej zbroi diamentowej?', a: ['20', '24', '28', '32'], correct: 1 },
        { q: 'Jak nazywa się podziemna struktura, w której można znaleźć portal do The End?', a: ['Dungeon', 'Stronghold', 'Bastion', 'Fortress'], correct: 1 },
        { q: 'Co można dostać od Endermena po jego zabiciu?', a: ['Eye of Ender', 'Ender Pearl', 'Chorus Fruit', 'End Crystal'], correct: 1 },
        { q: 'Ile minut trwa jeden pełny cykl dzień-noc w Minecraft?', a: ['10 minut', '20 minut', '30 minut', '5 minut'], correct: 1 },
        { q: 'Jak nazywa się najtwardszy materiał na ekwipunek dostępny w trybie Survival?', a: ['Diament', 'Obsydian', 'Netherit', 'Bedrock'], correct: 2 },
        { q: 'Jak nazywa się struktura w Netherze, gdzie spawnują się Blazes i Wither Skelety?', a: ['Nether Fortress', 'Bastion Remnant', 'Crimson Forest', 'Nether Wastes'], correct: 0 },
        { q: 'W co zamienia się świnia trafiona piorunem w Minecraft?', a: ['Zombie', 'Zombified Piglin', 'Charged Creeper', 'Wither Skeleton'], correct: 1 },
        { q: 'Jak nazywa się NPC handlujący z graczem w zamian za szmaragdy?', a: ['Wandering Trader', 'Pillager', 'Wieśniak (Villager)', 'Witch'], correct: 2 },
        { q: 'Ile obrażeń zadaje diamentowy miecz w Java Edition?', a: ['6', '7', '8', '9'], correct: 1 },
        { q: 'Co upuszcza Ender Dragon po raz pierwszy po pokonaniu?', a: ['Elytra', 'Dragon Egg', 'Chorus Fruit', 'End Crystal'], correct: 1 },
        { q: 'Który biom jest powszechnie uważany za najrzadszy w Minecraft?', a: ['Mushroom Fields', 'Ice Spikes', 'Bamboo Jungle', 'Eroded Badlands'], correct: 0 },
        { q: 'Po ilu blokach spadania gracz zaczyna tracić życie od upadku?', a: ['2 bloki', '3 bloki', '4 bloki', '5 bloków'], correct: 2 },
        { q: 'Kto stworzył oryginalną muzykę (soundtrack) do Minecraft?', a: ['Deadmau5', 'C418', 'Lena Raine', 'Notch'], correct: 1 },
        { q: 'Jak ma na imię oryginalny twórca Minecraft?', a: ['Jeb_', 'Notch (Markus Persson)', 'Dream', 'Dinnerbone'], correct: 1 },
        { q: 'Które zwierzę dostarcza wełny w Minecraft?', a: ['Krowa', 'Koza', 'Owca', 'Lama'], correct: 2 },
        { q: 'Czego potrzebujesz do stworzenia stołu enchanterskiego (Enchanting Table)?', a: ['1 książka, 2 diamenty, 4 obsydian', '2 książki, 1 diament, 4 obsydian', '1 książka, 4 diamenty, 2 obsydian', '1 książka, 1 diament, 6 obsydian'], correct: 0 },
        { q: 'Jak nazywa się tryb gry, w którym gracz ma nieograniczone zasoby i jest nieśmiertelny?', a: ['Survival', 'Creative', 'Adventure', 'Spectator'], correct: 1 },
        { q: 'Skąd pochodzi materiał potrzebny do craftowania Netheritowego ekwipunku?', a: ['Z kopania w The End', 'Z Ancient Debris w Netherze', 'Z Bastion Remnant', 'Z Nether Quartz'], correct: 1 },
    ],
    'FearAndHunger1': [
        { q: 'Ile grywalnych postaci można wybrać na początku Fear & Hunger?', a: ['3', '4', '5', '6'], correct: 1 },
        { q: 'Jakie dwa główne zasoby przetrwania zarządza gracz w Fear & Hunger?', a: ['Zdrowie i Mana', 'Strach i Głód', 'Stamina i Sanity', 'Ból i Wyczerpanie'], correct: 1 },
        { q: 'Jak nazywa się gadająca odcięta głowa, która może towarzyszyć graczowi?', a: ['Moonless', "Nas'hrah", "Le'garde", 'The Tormented One'], correct: 1 },
        { q: 'Kto jest deweloperem Fear & Hunger?', a: ['CD Projekt Red', 'Miro Haverinen (Hiver)', 'FromSoftware', 'Team17'], correct: 1 },
        { q: "Jak nazywa się postać będąca paladynką/krzyżowcem w Fear & Hunger?", a: ['Cahara', "D'arce", 'Ragnvaldr', 'Enki'], correct: 1 },
        { q: 'Jak nazywa się postać pełniąca rolę lekarza/doktora w Fear & Hunger?', a: ['Cahara', "D'arce", 'Ragnvaldr', 'Enki Ankarian'], correct: 3 },
        { q: 'Jak nazywa się nordycki wojownik w Fear & Hunger?', a: ['Cahara', "D'arce", 'Ragnvaldr', 'Enki'], correct: 2 },
        { q: 'Jak nazywa się postać będąca strażnikiem/żołnierzem w Fear & Hunger?', a: ['Cahara', "D'arce", 'Ragnvaldr', 'Enki'], correct: 0 },
        { q: 'Gdzie rozgrywa się akcja Fear & Hunger?', a: ['Na polu bitwy', 'W mrocznych lochach (dungeons)', 'W nawiedzonym zamku', 'W starożytnej świątyni'], correct: 1 },
        { q: 'W którym roku Fear & Hunger zostało wydane na Steam?', a: ['2016', '2017', '2018', '2019'], correct: 2 },
        { q: 'Co wyjątkowego może przydarzyć się postaciom gracza podczas walki?', a: ['Automatycznie awansują', 'Mogą stracić kończyny', 'Wracają do życia po śmierci', 'Teleportują się do wyjścia'], correct: 1 },
        { q: "Jak nazywa się potężny rycerz/przywódca, którego gracz napotyka w lochach?", a: ["Nas'hrah", "Le'garde", 'Moonless', 'The Tormented One'], correct: 1 },
        { q: 'Z jakiego kraju pochodzi deweloper Fear & Hunger, Miro Haverinen?', a: ['Polska', 'Finlandia', 'Szwecja', 'Norwegia'], correct: 1 },
        { q: 'Jak nazywa się stara wiedźma/mistyczka pojawiająca się w serii Fear & Hunger?', a: ['Moonless', 'Nas\'hrah', 'Skin Granny', 'D\'arce'], correct: 2 },
        { q: 'Jakie wydarzenie kończy grę Fear & Hunger — co musi osiągnąć gracz?', a: ['Zabić wszystkich wrogów w lochach', 'Uciec z lochów lub wstąpić na bóstwo', 'Odnaleźć zaginionego króla', 'Zebrać wszystkie artefakty'], correct: 1 },
    ],
    'FearAndHunger2': [
        { q: 'W jakiej dekadzie XX wieku rozgrywa się Fear & Hunger 2: Termina?', a: ['Lata 20.', 'Lata 30.', 'Lata 40.', 'Lata 50.'], correct: 2 },
        { q: 'Ile dni trwa festiwal Termina w Fear & Hunger 2?', a: ['2 dni', '3 dni', '4 dni', '5 dni'], correct: 1 },
        { q: 'Jak nazywa się tajemnicza kocia istota w Fear & Hunger 2: Termina?', a: ['Skin Granny', 'Moonless', 'Pocketcat', 'Sylvian'], correct: 2 },
        { q: 'Jaki jest główny cel uczestników festiwalu Termina?', a: ['Uciec z miasta', 'Zostać bogiem Terminy', 'Znaleźć legendarny skarb', 'Ocalić miasto przed zniszczeniem'], correct: 1 },
        { q: 'Jak nazywa się bóstwo miłości i pożądania w Fear & Hunger 2: Termina?', a: ['Moonless', 'Pocketcat', 'Sylvian', 'Alll-mer'], correct: 2 },
        { q: 'Ile grywalnych postaci jest dostępnych w Fear & Hunger 2: Termina?', a: ['5', '6', '7', '8'], correct: 2 },
        { q: 'W którym roku wydano Fear & Hunger 2: Termina?', a: ['2020', '2021', '2022', '2023'], correct: 2 },
        { q: 'Jak nazywa się miasto, w którym rozgrywa się festiwal w Fear & Hunger 2: Termina?', a: ['Novgrad', 'Prehevil', 'Termina', 'Ashfield'], correct: 1 },
        { q: 'Jakie historyczne tło towarzyszy Fear & Hunger 2: Termina?', a: ['I Wojna Światowa', 'II Wojna Światowa', 'Zimna Wojna', 'Rewolucja Francuska'], correct: 1 },
        { q: 'Czym Fear & Hunger 2: Termina różni się od pierwszej części pod względem lokacji?', a: ['Rozgrywa się w lochach jak część 1', 'Akcja toczy się w otwartym mieście', 'Rozgrywa się na morzu', 'Akcja dzieje się w lesie'], correct: 1 },
        { q: 'Jak nazywa się postać będąca mechanikiem/inżynierką wśród graczy Terminy?', a: ['Marina', 'Karin', 'Abella', "O'saa"], correct: 2 },
        { q: 'Który z opisów najlepiej oddaje gatunek Fear & Hunger 2: Termina?', a: ['Shooter FPS', 'Mroczne Survival Horror RPG', 'Gra platformowa', 'Battle Royale'], correct: 1 },
        { q: 'Jakie nawiązanie do poprzedniej gry zawiera Fear & Hunger 2: Termina?', a: ['Brak powiązań fabularnych', 'Powracające postacie i lore ze świata Fear & Hunger', 'Ta sama lokacja — lochy', 'Identyczny system walki bez żadnych zmian'], correct: 1 },
        { q: 'Jak nazywa się postać będąca bokserem wśród graczy w Fear & Hunger 2: Termina?', a: ['Levi', 'Marcoh', 'Tanaka', 'O\'saa'], correct: 1 },
        { q: 'Inspiracją dla klimatu Fear & Hunger 2: Termina jest kultura jakiego regionu?', a: ['Azja Wschodnia', 'Europa Zachodnia', 'Wschodnia Europa/obszar sowiecki', 'Bliski Wschód'], correct: 2 },
    ],
    'FNAF': [
        { q: 'Jak nazywa się główny antagonista i seryjny morderca w całej serii FNAF?', a: ['Henry Emily', 'William Afton', 'Mike Schmidt', 'Phone Guy'], correct: 1 },
        { q: 'Kto stworzył serię Five Nights at Freddy\'s?', a: ['Toby Fox', 'Scott Cawthon', 'Markus Persson', 'Edmund McMillen'], correct: 1 },
        { q: 'W którym roku ukazał się pierwszy FNAF?', a: ['2012', '2013', '2014', '2015'], correct: 2 },
        { q: 'W FNAF 1 — który animatronik przebywa w miejscu zwanym "Pirate\'s Cove"?', a: ['Freddy', 'Bonnie', 'Chica', 'Foxy'], correct: 3 },
        { q: 'Jak nazywa się restauracja, w której rozgrywa się akcja FNAF 1?', a: ['Freddy Fazbear\'s Pizza', 'Circus Baby\'s Pizza World', 'Fazbear\'s Fright', 'Mega Pizzaplex'], correct: 0 },
        { q: 'Ile procent mocy posiada gracz na początku każdej nocy w FNAF 1?', a: ['75%', '100%', '50%', '90%'], correct: 1 },
        { q: 'Czym jest "Bite of \'87" wspominane w FNAF 1?', a: ['Nazwa pożaru restauracji', 'Zdarzenie gdzie animatronik odgryzł część głowy człowieka', 'Pierwsza awaria animatronika', 'Tajemnicze zaginięcie dzieci'], correct: 1 },
        { q: 'W FNAF 2 gracz musi nakręcać pozytywkę, aby powstrzymać który animatronik?', a: ['Toy Freddy', 'Balloon Boy', 'Mangle', 'The Puppet/Marionette'], correct: 3 },
        { q: 'Jaka unikalna zdolność zastępuje drzwi w FNAF 2?', a: ['Włączenie świateł alarmowych', 'Założenie maski Freddy\'ego', 'Wyłączenie zasilania', 'Ukrycie się pod biurkiem'], correct: 1 },
        { q: 'Jak nazywa się horror-atrakcja, w której rozgrywa się FNAF 3?', a: ['Fazbear\'s Fright', 'Circus Baby\'s Rentals', 'Freddy\'s Fun World', 'Mega Pizzaplex'], correct: 0 },
        { q: 'Kim jest "Springtrap" z FNAF 3?', a: ['Duchem zamordowanego dziecka', 'Williamem Aftonem uwięzionym w kombinezonie Spring Bonnie', 'Starym prototypem Freddy\'ego', 'Robotem stworzonym przez Henry\'ego'], correct: 1 },
        { q: 'W FNAF 4 gracz broni się w sypialni przed animatronikami za pomocą:', a: ['Kamer i metalowych drzwi', 'Latarki i zamykania drewnianych drzwi', 'Maski Freddy\'ego', 'Nakręcania pozytywki'], correct: 1 },
        { q: 'Jakie tragiczne wydarzenie jest pokazywane w mini-grach FNAF 4?', a: ['Śmierć Phone Guy\'a', 'Ugryzienie Crying Childa przez Fredbear\'a (Bite of \'83)', 'Pożar pierwszej restauracji', 'Ucieczka Springtrapa z Fazbear\'s Fright'], correct: 1 },
        { q: 'Jak nazywa się animatronik-amalgamat złożony z resztek Funtime animatroników w Sister Location?', a: ['Scraptrap', 'Molten Freddy', 'Ennard', 'Lolbit'], correct: 2 },
        { q: 'Jak nazywa się urządzenie w Sister Location, które "opróżnia" animatroniki z ich zawartości?', a: ['Endo-Frame Remover', 'The Scooper', 'Remnant Extractor', 'Parts & Service'], correct: 1 },
        { q: 'Jak nazywa się lokacja w Sister Location (FNAF 5)?', a: ['Freddy Fazbear\'s Pizza', 'Fazbear\'s Fright', 'Circus Baby\'s Entertainment and Rentals', 'Mega Pizzaplex'], correct: 2 },
        { q: 'Kim jest animatronik "Circus Baby" i czyją duszą jest opętana?', a: ['Córką Henry\'ego Emily', 'Córką Williama Aftona — Elizabeth Afton', 'Duchem anonimowego dziecka', 'Córką Phone Guy\'a'], correct: 1 },
        { q: 'W Pizzeria Simulator (FNAF 6), kto wygłasza końcowy monolog i podpala budynek?', a: ['William Afton', 'Michael Afton', 'Henry Emily', 'Phone Guy'], correct: 2 },
        { q: 'Jak nazywa się postać znana jako "The Puppet" lub "The Marionette"?', a: ['Baby', 'Ballora', 'Charlotte Emily (córka Henry\'ego)', 'Vanny'], correct: 2 },
        { q: 'Kto był współzałożycielem Freddy Fazbear\'s Pizza razem z Williamem Aftonem?', a: ['Mike Schmidt', 'Henry Emily', 'Phone Guy', 'Jeremy Fitzgerald'], correct: 1 },
        { q: 'Jak nazywa się dziecięcy protagonista FNAF: Security Breach?', a: ['Mike', 'Gregory', 'Jeremy', 'Evan'], correct: 1 },
        { q: 'Który animatronik w Security Breach pomaga protagoniście i jest po jego stronie?', a: ['Glamrock Chica', 'Glamrock Freddy', 'Roxanne Wolf', 'Montgomery Gator'], correct: 1 },
        { q: 'Jak nazywa się antagonistka w Security Breach, będąca pod wpływem Glitchtrap?', a: ['Baby', 'Ballora', 'Vanny', 'Roxanne'], correct: 2 },
        { q: 'Jak nazywa się lokacja w FNAF: Security Breach?', a: ['Freddy Fazbear\'s Mega Pizzaplex', 'Circus Baby\'s Pizza World', 'Fazbear\'s Fright 2', 'Freddy Fazbear\'s Pizza Place'], correct: 0 },
        { q: 'Czym jest "Purple Guy" (Fioletowy Człowiek) w lore serii FNAF?', a: ['Henry Emily — budowniczy animatroników', 'William Afton — seryjny morderca dzieci', 'Michael Afton — syn Williama', 'Phone Guy'], correct: 1 },
    ],
    'DBD': [
        { q: 'Ilu graczy uczestniczy w standardowej rozgrywce Dead by Daylight?', a: ['3 ocaleńcy vs 1 zabójca', '4 ocaleńcy vs 1 zabójca', '5 ocaleńców vs 1 zabójca', '4 ocaleńcy vs 2 zabójców'], correct: 1 },
        { q: 'Ile generatorów muszą naprawić ocaleńcy, aby otworzyć wyjścia?', a: ['3', '4', '5', '6'], correct: 2 },
        { q: 'Jak nazywa się tajemnicza istota będąca gospodarzem Prób (Trials) w DBD?', a: ['The Fog', 'The Entity', 'The Observer', 'The Darkness'], correct: 1 },
        { q: 'Który zabójca był pierwszym dostępnym w Dead by Daylight?', a: ['Nurse', 'Trapper', 'Hillbilly', 'Wraith'], correct: 1 },
        { q: 'Jaka jest unikalna zdolność zabójcy Trapper?', a: ['Ustawianie pułapek na niedźwiedzie', 'Teleportacja przez ściany', 'Stawanie się niewidzialnym', 'Strzelanie łańcuchem'], correct: 0 },
        { q: 'Co się dzieje po trzecim zaczepieniu ocaleńca na haku?', a: ['Ocaleniec ucieka automatycznie', 'Ocaleniec zostaje poświęcony Bytowi (Entity)', 'Ocaleniec traci wszystkie perki', 'Zabójca dostaje dodatkowe punkty'], correct: 1 },
        { q: 'Który ocaleniec posiada perk "Self Care" (leczenie bez apteczki)?', a: ['Meg Thomas', 'Claudette Morel', 'Dwight Fairfield', 'Jake Park'], correct: 1 },
        { q: 'Jaki efekt daje perk "Borrowed Time" po zdjęciu ocaleńca z haka?', a: ['Natychmiastowe pełne uzdrowienie', 'Tymczasową odporność na jeden cios (Endurance)', 'Przyspieszenie sprintu', 'Niewidzialność przez 5 sekund'], correct: 1 },
        { q: 'Jak działa perk "Decisive Strike" (DS)?', a: ['Daje sprint przy starcie pościgu', 'Pozwala uderzyć zabójcę sztyletem gdy cię podnosi', 'Leczy ze stanu ranny', 'Blokuje najbliższy generator'], correct: 1 },
        { q: 'W którym roku ukazało się Dead by Daylight?', a: ['2014', '2015', '2016', '2017'], correct: 2 },
        { q: 'Kto opracował i wydał Dead by Daylight?', a: ['Ubisoft', 'Behaviour Interactive', 'Blizzard', '2K Games'], correct: 1 },
        { q: 'Jak działa perk zabójcy "NOED" (No One Escapes Death)?', a: ['Blokuje wszystkie generatory', 'Daje boost szybkości i status Exposed gdy wyjścia są otwarte', 'Zamyka wszystkie wyjścia', 'Zabija ocaleńców jednym trafieniem przez cały mecz'], correct: 1 },
        { q: 'Ile haków standardowo znajduje się w piwnicy (Basement)?', a: ['2', '3', '4', '5'], correct: 2 },
        { q: 'Z czego znana jest zdolność zabójczyni Nurse?', a: ['Rzucania toporkami na odległość', 'Błyskawicznej teleportacji (Blink) przez ściany i obiekty', 'Strzelania łańcuchem z karabinu', 'Tworzenia pułapek na ziemi'], correct: 1 },
        { q: 'Który ocaleniec pochodzi z franczyzy "Left 4 Dead"?', a: ['Ash Williams', 'Bill Overbeck', 'Quentin Smith', 'Tapp'], correct: 1 },
        { q: 'Który zabójca pochodzi z franczyzy "Silent Hill"?', a: ['Nemesis', 'Cenobite', 'Executioner (Pyramid Head)', 'Ghost Face'], correct: 2 },
        { q: 'Jak można ogłuszyć zabójcę w trakcie pościgu?', a: ['Rzucając granatem', 'Rzucając paletą na zabójcę (Pallet Stun)', 'Używając latarki do ataku', 'Kopiąc go w sprint'], correct: 1 },
        { q: 'Czym jest "Hex Totem" w Dead by Daylight?', a: ['Totem dający ocaleńcom permanentną przewagę', 'Totem powiązany z perkieem zabójcy — zniszczenie go wyłącza perk', 'Specjalny generator z bonusem punktowym', 'Skrytka z przedmiotami dla ocaleńców'], correct: 1 },
        { q: 'Jak nazywa się zabójca, który strzela haczykiem na łańcuchu aby przyciągać ocaleńców?', a: ['Huntress', 'Deathslinger', 'Cenobite', 'Trickster'], correct: 1 },
        { q: 'Kiedy otwiera się właz (Hatch) w Dead by Daylight?', a: ['Gdy wszystkie generatory są gotowe', 'Gdy zostaje tylko jeden żywy ocaleniec', 'Gdy zabójca opuści mapę', 'Po upływie 10 minut'], correct: 1 },
        { q: 'Który perk Meg Thomas daje krótki burst szybkości na początku biegu?', a: ['Dead Hard', 'Adrenaline', 'Sprint Burst', 'Lithe'], correct: 2 },
        { q: 'Z jakiej franczyzy pochodzi zabójca znany jako "The Shape"?', a: ['Friday the 13th', 'Halloween', 'Scream', 'A Nightmare on Elm Street'], correct: 1 },
        { q: 'Jak nazywa się waluta premium (płatna) w Dead by Daylight?', a: ['Blood Points', 'Iridescent Shards', 'Auric Cells', 'Rift Fragments'], correct: 2 },
        { q: 'Jak nazywa się waluta zdobywana podczas rozgrywki, służąca do ulepszeń w Bloodweb?', a: ['Auric Cells', 'Blood Points', 'Iridescent Shards', 'Merits'], correct: 1 },
        { q: 'Jak nazywa się zabójca z "Resident Evil" znany z infekowania ocaleńców Uroborosem?', a: ['Nemesis', 'Mastermind (Wesker)', 'Mr. X', 'Pyramid Head'], correct: 1 },
        { q: 'Jaka jest unikalna zdolność zabójczyni Huntress?', a: ['Teleportacja do ran ocaleńców', 'Rzucanie toporkami na dużą odległość', 'Strzelanie łańcuchem przyciągającym', 'Pułapki ze skaczącymi żabami'], correct: 1 },
        { q: 'Co robi perk Davida Kinga "Dead Hard"?', a: ['Daje długi sprint na początku próby', 'Pozwala na unik do przodu absorbując jeden cios', 'Leczy ocaleńca natychmiastowo po odczepieniu', 'Automatycznie blokuje pobliski generator'], correct: 1 },
        { q: 'Ile faz ma hak zanim ocaleniec zostanie ostatecznie poświęcony?', a: ['Jedna faza', 'Dwie fazy (a po nich śmierć)', 'Trzy fazy (dwie na haku + poświęcenie)', 'Cztery fazy'], correct: 1 },
        { q: 'Jak działa zdolność zabójcy Wraith?', a: ['Teleportuje się do generatorów', 'Dzwoni dzwonkiem aby stać się niewidzialnym (cloaked)', 'Rzuca sieciami na ocaleńców', 'Kontroluje rój kruków'], correct: 1 },
        { q: 'Który ocaleniec pochodzi z franczyzy "Evil Dead"?', a: ['Quentin Smith', 'Tapp', 'Ash Williams', 'Nicolas Cage'], correct: 2 },
        { q: 'Jak nazywa się mapa w DBD inspirowana franczyzą "Resident Evil"?', a: ['Midwich Elementary School', 'Raccoon City Police Department', 'Hawkins Laboratory', 'Gideon Meat Plant'], correct: 1 },
        { q: 'Co robi perk zabójcy "BBQ & Chili"?', a: ['Wzmacnia każdy atak o 10%', 'Ujawnia aury oddalonych ocaleńców po zahaczeniu i podwaja Blood Points', 'Blokuje wszystkie palety w zasięgu', 'Sprawia że generatory regresują szybciej'], correct: 1 },
        { q: 'Który zabójca pochodzi z franczyzy "A Nightmare on Elm Street"?', a: ['The Shape', 'The Nightmare (Freddy Krueger)', 'The Pig', 'The Clown'], correct: 1 },
        { q: 'Jak nazywa się domyślny (pierwszy) grywalna postać ocaleńca w DBD?', a: ['Meg Thomas', 'Claudette Morel', 'Dwight Fairfield', 'Jake Park'], correct: 2 },
        { q: 'Czym jest "Obsession" (Obsesja) w Dead by Daylight?', a: ['Ocaleniec wybrany losowo jako specjalny cel perkiów zabójcy', 'Specjalny tryb gry z modyfikatorami', 'Nazwa ostatniego żywego ocaleńca', 'Perk dający chwilową nieśmiertelność'], correct: 0 },
        { q: 'Który zabójca pochodzi z franczyzy "The Texas Chain Saw Massacre"?', a: ['Hillbilly', 'Cannibal (Leatherface)', 'Trapper', 'Deathslinger'], correct: 1 },
        { q: 'Czym jest taktyka znana jako "Slugging" w DBD?', a: ['Naprawianie generatorów jednocześnie we dwójkę', 'Zostawianie ranionych ocaleńców na ziemi zamiast zaczepiania na haku', 'Atakowanie ocaleńców przez palety', 'Blokowanie wyjść ciałem zabójcy'], correct: 1 },
        { q: 'W jaki sposób atakuje zabójczyni The Plague (Zaraza)?', a: ['Rzuca toporkami z odległości', 'Wymiotuje na ocaleńców i generatory, infekując ich', 'Strzela łańcuchem z karabinu', 'Teleportuje się do ran ocaleńców'], correct: 1 },
        { q: 'Jak nazywa się system, przez który gracze odblokowują nowe perki i przedmioty w DBD?', a: ['Skill Tree', 'Bloodweb', 'Perk Store', 'Level Board'], correct: 1 },
        { q: 'Który zabójca pochodzi z franczyzy "Hellraiser"?', a: ['The Demogorgon', 'The Dredge', 'The Executioner', 'The Cenobite (Pinhead)'], correct: 3 },
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function selectCategory(category) {
    // pobieranie pytania dla gry wybranej
    const allCategoryQuestions = quizData[category]; 
    
    // losuje 10 pytań z danej kategorii
    currentQuestions = allCategoryQuestions 
        .sort(() => 0.5 - Math.random()) 
        .slice(0, 10);

    // resetuje stan gry
    currentQuestionIndex = 0;
    score = 0;
    updateStats();

    // przelaczenie ekranow
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('quiz-active').style.display = 'block';

    showQuestion();
}

function showQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('q-text').innerText = q.q;

    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((btn, index) => {
        btn.innerText = q.a[index];
        // --- ZMIANA: Usuwamy ręczne tło, zdejmujemy klasy neonowe i odblokowujemy przyciski
        btn.style.backgroundColor = ''; 
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });
}

function handleAnswer(selectedIndex) {
    const correctIndex = currentQuestions[currentQuestionIndex].correct;
    const buttons = document.querySelectorAll('.answer-btn');

    // Blokujemy przyciski po kliknięciu
    buttons.forEach(btn => btn.disabled = true);

    // --- ZMIANA: Używamy nowych klas CSS zamiast style.backgroundColor
    if (selectedIndex === correctIndex) {
        score++;
        buttons[selectedIndex].classList.add('correct'); 
    } else {
        buttons[selectedIndex].classList.add('wrong'); 
        buttons[correctIndex].classList.add('correct'); // Pokazujemy też właściwą odpowiedź!
    }

    // Przejście do następnego pytania
    setTimeout(() => {
        currentQuestionIndex++;
        updateStats();

        if (currentQuestionIndex < 10) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500); // Zwiększyłem troszkę czas z 1000 na 1500ms, żeby gracz nacieszył się podświetleniem
}

function updateStats() {
    document.getElementById('current-points').innerText = score;
    // Korekta licznika (żeby nie pokazywało 0/10 przy pierwszym pytaniu, tylko 1/10)
    let displayIndex = currentQuestionIndex < 10 ? currentQuestionIndex + 1 : 10;
    document.getElementById('question-counter').innerText = `${displayIndex}/10`;
}

function showResults() {
    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-score').innerText = score;
}