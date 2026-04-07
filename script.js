// ============================
// PASTE YOUR MAIN WEBSITE LINK HERE
// ============================
const MAIN_WEBSITE_URL = "https://grmkart.com/";

// ============================
// PASTE YOUR POPUP BUTTON LINK HERE
// ============================
const POPUP_BUTTON_LINK = "https://grmkart.com/";

// Show popup after 10 seconds
setTimeout(() => {
  const popupOverlay = document.getElementById("popupOverlay");
  const closePopup = document.getElementById("closePopup");
  const popupButton = document.getElementById("popupButton");

  if (popupOverlay) {
    popupOverlay.classList.add("active");

    if (popupButton) {
      popupButton.setAttribute("href", POPUP_BUTTON_LINK);
    }

    // If user does nothing for 3 sec after popup opens, redirect
    const autoRedirect = setTimeout(() => {
      window.location.href = MAIN_WEBSITE_URL;
    }, 3000);

    // Close popup on cross click
    if (closePopup) {
      closePopup.addEventListener("click", () => {
        popupOverlay.classList.remove("active");
        clearTimeout(autoRedirect);
      });
    }

    // Stop redirect if popup button clicked
    if (popupButton) {
      popupButton.addEventListener("click", () => {
        clearTimeout(autoRedirect);
      });
    }
  }
}, 10000);