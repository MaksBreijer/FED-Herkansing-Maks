// Selecteer de elementen
const openKnop = document.querySelector("#open-menu");
const sluitKnop = document.querySelector("#sluit-menu");
const deMenuLijst = document.querySelector("#menu-lijst");

// Functie om menu te openen
openKnop.onclick = function() {
    deMenuLijst.classList.add("toon-menu");
};

// Functie om menu te sluiten
sluitKnop.onclick = function() {
    deMenuLijst.classList.remove("toon-menu");
};