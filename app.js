const toggleButton = document.getElementById("toggleButton");
const navLinks = document.getElementById("navLinks");

function setMenuOpen(isOpen) {
    navLinks.classList.toggle("active", isOpen);
    toggleButton.setAttribute("aria-expanded", String(isOpen));
    toggleButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
}

toggleButton.addEventListener("click", () => {
    setMenuOpen(!navLinks.classList.contains("active"));
});

navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        setMenuOpen(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuOpen(false);
    }
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(
        `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
    );

    formStatus.textContent = "Opening your email app with the message details…";
    window.location.href = `mailto:sonulekrushna@gmail.com?subject=${subject}&body=${body}`;
});

