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

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".category-track");
    const prevButton = document.querySelector(".category-prev");
    const nextButton = document.querySelector(".category-next");
    const items = document.querySelectorAll(".category-item");
    let index = 0;
    const totalItems = items.length;
    const visibleItems = 3;
    let interval;

    // Анімація для всіх елементів слайдера
    function animateItemsOnLoad() {
        items.forEach((item, i) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, 300 * i); // Анімація для кожного елемента з затримкою
        });
    }

    // Анімація для кнопок
    function animateButtonsOnLoad() {
        prevButton.classList.add('visible');
        nextButton.classList.add('visible');
    }

    // Функція для переміщення слайдів
    function moveSlide(next = true) {
        if (next) {
            index++;
            if (index > totalItems - visibleItems) {
                index = 0;
            }
        } else {
            index--;
            if (index < 0) {
                index = totalItems - visibleItems;
            }
        }

        track.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
    }

    // Функція для старту автоперемикання слайдів
    function startAutoSlide() {
        interval = setInterval(() => moveSlide(true), 3000);
    }

    // Функція для зупинки автоперемикання слайдів
    function stopAutoSlide() {
        clearInterval(interval);
    }

    prevButton.addEventListener("click", () => {
        moveSlide(false);
        stopAutoSlide();
        startAutoSlide();
    });

    nextButton.addEventListener("click", () => {
        moveSlide(true);
        stopAutoSlide();
        startAutoSlide();
    });

    // Запускаємо анімацію при завантаженні
    animateItemsOnLoad();
    animateButtonsOnLoad();
    startAutoSlide();
});

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.prop-text1, .prop-text2, .prop-text11, .prop-text22, .prop a, h2');
    
    elements.forEach(function(element) {
        const position = element.getBoundingClientRect();
        
        // Якщо елемент потрапляє в область видимості екрану, додаємо клас 'show'
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('show');
        }
    });
});

document.querySelectorAll('.trend').forEach(trend => {
    trend.addEventListener('click', function () {
        document.querySelectorAll('.trend').forEach(cat => cat.classList.remove('trend-active'));
        this.classList.add('trend-active');

        let selectedTrend = this.getAttribute('data-trend');

        document.querySelectorAll('.trend-item').forEach(item => {
            item.classList.remove('trend-show', 'trend-visible');
            if (item.getAttribute('data-trend') === selectedTrend) {
                item.classList.add('trend-show');
                setTimeout(() => item.classList.add('trend-visible'), 50);
            }
        });
    });
});

document.querySelectorAll('.trend').forEach(trend => {
    trend.addEventListener('click', function () {
        document.querySelectorAll('.trend').forEach(cat => cat.classList.remove('trend-active'));
        this.classList.add('trend-active');

        let selectedTrend = this.getAttribute('data-trend');

        document.querySelectorAll('.trend-item').forEach(item => {
            item.classList.remove('trend-show', 'trend-visible');
            if (item.getAttribute('data-trend') === selectedTrend) {
                item.classList.add('trend-show');
                setTimeout(() => item.classList.add('trend-visible'), 50);
            }
        });
    });
});

document.querySelectorAll('.trend').forEach(trend => {
    trend.addEventListener('click', function () {
        document.querySelectorAll('.trend').forEach(cat => cat.classList.remove('trend-active'));
        this.classList.add('trend-active');

        let selectedTrend = this.getAttribute('data-trend');

        document.querySelectorAll('.trend-item').forEach(item => {
            item.classList.remove('trend-show', 'trend-visible');
            if (item.getAttribute('data-trend') === selectedTrend) {
                item.classList.add('trend-show');
                setTimeout(() => item.classList.add('trend-visible'), 50);
            }
        });
    });
});

// Lazy reveal для другого рядка товарів
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('trend-visible');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.trend-item').forEach(item => observer.observe(item));
