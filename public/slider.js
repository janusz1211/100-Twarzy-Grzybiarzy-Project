document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const paginationContainer = document.querySelector('.pagination');
  const slider = document.getElementById('mainSlider');
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoplayInterval;
  const autoplayDelay = 5000; // Czas wyświetlania slajdu (5 sekund)

  // 1. Generowanie kropek paginacji
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.dataset.index = index;
    paginationContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  // 2. Funkcja zmieniająca slajd
  function goToSlide(index) {
    // Usuń klasę active ze wszystkich slajdów i kropek
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Zabezpieczenie przed wyjściem poza zakres
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    // Dodaj klasę active do wybranego slajdu i kropki
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  // 3. Obsługa przycisków Prev/Next
  function nextSlide() {
    goToSlide(currentIndex + 1);
    resetAutoplay();
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
    resetAutoplay();
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // 4. Obsługa kliknięcia w kropki
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const index = parseInt(this.dataset.index);
      goToSlide(index);
      resetAutoplay();
    });
  });

  // 5. Autoplay (Automatyczne przewijanie)
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, autoplayDelay);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Zatrzymanie autoplay po najechaniu myszką (jak w Xbox)
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Inicjalizacja autoplay
  startAutoplay();
});