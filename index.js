const menuToggle = document.querySelector(".menu-toggle");
const mobilePanel = document.getElementById("mobilePanel");

if (menuToggle && mobilePanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobilePanel.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const footerMobileQuery = window.matchMedia("(max-width: 768px)");
const footerColumns = document.querySelectorAll(".footer-column");

function updateFooterAccordions() {
  footerColumns.forEach((column) => {
    const toggle = column.querySelector(".footer-toggle");
    const isExpanded = !footerMobileQuery.matches;

    column.classList.toggle("is-expanded", isExpanded);
    toggle.disabled = !footerMobileQuery.matches;
    toggle.setAttribute("aria-expanded", String(isExpanded));
  });
}

footerColumns.forEach((column) => {
  const toggle = column.querySelector(".footer-toggle");

  toggle.addEventListener("click", () => {
    if (!footerMobileQuery.matches) return;

    const isExpanded = column.classList.toggle("is-expanded");
    toggle.setAttribute("aria-expanded", String(isExpanded));
  });
});

updateFooterAccordions();
footerMobileQuery.addEventListener("change", updateFooterAccordions);

const storeSearchForm = document.getElementById("store-search-form");
const storeSearchMessage = document.getElementById("store-search-message");

if (storeSearchForm && storeSearchMessage) {
  storeSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    storeSearchMessage.textContent =
      "Live store search is not connected in this demo.";
  });
}

const signInForm = document.getElementById("sign-in-form");
const signInMessage = document.getElementById("sign-in-message");

if (signInForm && signInMessage) {
  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    signInMessage.textContent = "Sign-in is not connected in this demo.";
  });
}
