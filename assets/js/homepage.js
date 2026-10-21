
          
          
          
          
          
          
          
          
          
          
          //Team section
function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;

    // Update active image and dots
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });

    // Center the selected circle
    const activeSlide = slides[currentIndex];

    const slideCenter =
        activeSlide.offsetLeft + activeSlide.offsetWidth / 2;

    const windowCenter = windowArea.clientWidth / 2;

    track.style.transform =
        `translateX(${windowCenter - slideCenter}px)`;
}
