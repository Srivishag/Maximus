const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showCurrentSlide() {
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[currentIndex].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCurrentSlide();
  }

  // Show the first slide immediately
  showCurrentSlide();

  // Automatically move to the next slide every 5 seconds
  setInterval(nextSlide, 5000);