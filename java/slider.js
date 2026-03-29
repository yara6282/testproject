let currentIndex = 0;
const slides = document.getElementById("slides");

// التأكد من وجود السلايدر في الصفحة قبل تشغيل الكود
if (slides) {
    const totalSlides = slides.children.length;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // تغيير الصورة كل 4 ثواني
    setInterval(nextSlide, 4000);
}