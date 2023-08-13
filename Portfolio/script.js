// Add this JavaScript in a file named script.js

document.addEventListener("DOMContentLoaded", function () {
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalCloseBtn = document.querySelector(".modal-close-btn");
    const projectCards = document.querySelectorAll(".project");
  
    projectCards.forEach((card) => {
      card.addEventListener("click", () => {
        modalOverlay.classList.add("active");
      });
    });
  
    modalCloseBtn.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  
    modalOverlay.addEventListener("click", (event) => {
      if (event.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  });
  