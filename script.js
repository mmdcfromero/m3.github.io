 // JavaScript for Navigation
 document.querySelectorAll(".next-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const nextStep = this.getAttribute("data-next");
      navigateToStep(nextStep);
    });
  });

  document.querySelectorAll(".back-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const backStep = this.getAttribute("data-back");
      navigateToStep(backStep);
    });
  });

  document.querySelector(".submit-btn").addEventListener("click", function () {
    navigateToStep("thankYou");
  });

  function navigateToStep(step) {
// Update Step Sections
document.querySelectorAll(".step-section").forEach((section) => {
  section.classList.remove("active");
});
document.getElementById(step).classList.add("active");

// Update Progress Bar
document.querySelectorAll(".progress-step").forEach((tab) => {
  tab.classList.remove("active");
});
const activeTab = document.querySelector(`.progress-step[data-step="${step}"]`);
if (activeTab) {
  activeTab.classList.add("active");
}
}


  // JavaScript for Guest Selection
  const guestButtons = document.querySelectorAll(".guest-selection button");
  guestButtons.forEach((button) => {
    button.addEventListener("click", function () {
      guestButtons.forEach((btn) => btn.classList.remove("selected"));
      this.classList.add("selected");
    });
  });