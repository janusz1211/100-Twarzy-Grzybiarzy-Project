document.addEventListener('DOMContentLoaded', () => {
    const streamPanels = document.querySelectorAll('.stream-panel');
    const closeBtns = document.querySelectorAll('.close-panel-btn');

    // Obsługa kliknięcia w panel (Otwieranie)
    streamPanels.forEach(panel => {
        panel.addEventListener('click', function(e) {
            // Zignoruj kliknięcie, jeśli kliknięto w przycisk zamykania 
            // lub panel jest już otwarty
            if (this.classList.contains('is-active') || e.target.closest('.close-panel-btn')) {
                return;
            }

            // 1. Zwiń wszystkie panele
            streamPanels.forEach(p => {
                p.classList.remove('is-active');
                p.classList.add('is-hidden'); // Wąskie paski dla nieaktywnych
            });

            // 2. Rozwiń i wyprostuj kliknięty panel
            this.classList.remove('is-hidden');
            this.classList.add('is-active');
        });
    });

    // Obsługa kliknięcia w krzyżyk (Zamykanie)
    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Blokuje "przebicie" kliknięcia do panelu pod spodem
            
            // Przywróć wszystkie panele do stanu początkowego (ukośne, równe proporcje)
            streamPanels.forEach(p => {
                p.classList.remove('is-active');
                p.classList.remove('is-hidden');
            });
        });
    });
});