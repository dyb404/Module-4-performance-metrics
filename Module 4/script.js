// Handle dropdown menu toggle
const customerAnalyticsBtn = document.getElementById("customerAnalyticsBtn");
const customerAnalyticsMenu = document.getElementById("customerAnalyticsMenu");

customerAnalyticsBtn.addEventListener("click", () => {
  const isMenuVisible = customerAnalyticsMenu.style.display === "block";
  customerAnalyticsMenu.style.display = isMenuVisible ? "none" : "block";
});

// Hide menu when clicking outside (optional)
document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    customerAnalyticsMenu.style.display = "none";
  }
});
