
document.addEventListener("DOMContentLoaded", () => {
    // Фильтрация туров
    const filterButtons = document.querySelectorAll(".filter button");
    const tourCards = document.querySelectorAll(".tour-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            tourCards.forEach(card => {
                card.style.display = (category === "all" || card.dataset.category === category) ? "block" : "none";
            });
        });
    });

    // Модальное окно "Подробнее"
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll(".details-button").forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".tour-card");
            modalTitle.textContent = card.querySelector("h3").textContent;
            modalDescription.textContent = card.querySelector("p").textContent;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});