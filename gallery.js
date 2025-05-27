document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter button");
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Анимация появления изображений
    galleryItems.forEach(item => {
        setTimeout(() => {
            item.style.opacity = 1;
        }, Math.random() * 1000);
    });

    // Фильтрация изображений
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            galleryItems.forEach(item => {
                item.style.display = (category === "all" || item.dataset.category === category) ? "block" : "none";
            });
        });
    });

    // Открытие модального окна
    galleryItems.forEach(img => {
        img.addEventListener("click", () => {
            document.getElementById('modal').style.display = "flex";
            document.getElementById('modal-img').src = img.src;
        });
    });

    // Закрытие модального окна
    document.querySelector('.close').addEventListener("click", () => {
        document.getElementById('modal').style.display = "none";
    });
});