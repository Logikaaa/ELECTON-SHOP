let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    index = (n + totalSlides) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
    
    slides.forEach(slide => slide.classList.remove('active'));

    slides[index].classList.add('active');
}

function moveSlide(n) {
    showSlide(index + n);
}

setInterval(() => moveSlide(1), 5000);