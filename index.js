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
