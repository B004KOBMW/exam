document.addEventListener("DOMContentLoaded", () => {
    // Анимация появления блоков
    const elements = document.querySelectorAll(".features, .slider, .reviews");
    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "all 0.5s ease-out";
        }, 300);
    });
});