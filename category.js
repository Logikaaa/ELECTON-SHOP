document.querySelectorAll('.slider-container').forEach((sliderContainer) => {
    const slider = sliderContainer.querySelector('.slide');
    const prevButton = sliderContainer.querySelector('.prev');
    const nextButton = sliderContainer.querySelector('.next');

    let index = 0;

    function moveSlide(direction) {
        const totalSlides = slider.children.length;
        const visibleSlides = 4;
        
        index += direction;

        if (index < 0) {
            index = totalSlides - visibleSlides;
        } else if (index > totalSlides - visibleSlides) {
            index = 0;
        }

        const offset = -index * (200 + 20);
        slider.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', () => moveSlide(1));
    prevButton.addEventListener('click', () => moveSlide(-1));

    setInterval(() => moveSlide(1), 5000);
});
