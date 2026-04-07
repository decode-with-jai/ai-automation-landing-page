// ============================
// PASTE YOUR MAIN WEBSITE LINK HERE
// ============================
const MAIN_WEBSITE_URL = "https://your-main-website-link.com";

// Show popup after 10 seconds
setTimeout(() => {
  const popupOverlay = document.getElementById("popupOverlay");
  const closePopup = document.getElementById("closePopup");
  const popupButton = document.getElementById("popupButton");
  const courseCards = document.querySelectorAll(".course-card");

  if (!popupOverlay) return;

  popupOverlay.classList.add("active");

  let selectedLink = "";
  const activeCard = document.querySelector(".course-card.active");

  if (activeCard) {
    selectedLink = activeCard.getAttribute("data-link");
    if (popupButton) popupButton.setAttribute("href", selectedLink);
  }

  // Auto redirect after 3 seconds if user does nothing
  const autoRedirect = setTimeout(() => {
    window.location.href = MAIN_WEBSITE_URL;
  }, 3000);

  // Course selection
  courseCards.forEach((card) => {
    card.addEventListener("click", () => {
      courseCards.forEach((item) => item.classList.remove("active"));
      card.classList.add("active");

      selectedLink = card.getAttribute("data-link");
      if (popupButton) {
        popupButton.setAttribute("href", selectedLink);
      }

      clearTimeout(autoRedirect);
    });
  });

  // Close popup
  if (closePopup) {
    closePopup.addEventListener("click", () => {
      popupOverlay.classList.remove("active");
      clearTimeout(autoRedirect);
    });
  }

  // Main button click
  if (popupButton) {
    popupButton.addEventListener("click", () => {
      clearTimeout(autoRedirect);
    });
  }
}, 10000);