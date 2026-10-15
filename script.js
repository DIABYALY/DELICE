const WHATSAPP_NUMBER = "225701220639";

document.getElementById("year").textContent =
  new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu"
  );

  menuToggle.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const whatsappButton = document.querySelector(".whatsapp-button");
const message = encodeURIComponent(
  "Bonjour Délice ! Je souhaite connaître votre menu et passer une commande."
);

whatsappButton.href =
  https://wa.me/${WHATSAPP_NUMBER}?text=${message};

whatsappButton.target = "_blank";
whatsappButton.rel = "noopener noreferrer";