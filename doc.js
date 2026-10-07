

let menuToggle = document.getElementById("menuToggle");
let navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {

    if (navMenu.style.display === "block") {

        navMenu.style.display = "none";

    } else {

        navMenu.style.display = "block";

    }

});



// =========================
// MENÚ DE CONSOLAS
// =========================

let dropdownBtn = document.getElementById("dropdownBtn");
let myDropdown = document.getElementById("myDropdown");

dropdownBtn.addEventListener("click", function() {

    if (myDropdown.style.display === "block") {

        myDropdown.style.display = "none";

    } else {

        myDropdown.style.display = "block";

    }

});



// =========================
// MODAL DE SERVICIOS
// =========================

let botones = document.querySelectorAll(".btn-card");

let modal = document.getElementById("infoModal");

let modalTitle = document.getElementById("modalTitle");

let modalDescription = document.getElementById("modalDescription");

let closeModal = document.querySelector(".close-modal");



// Recorrer todos los botones "Saber más"

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let tarjeta = boton.closest(".service-card");

        let titulo = tarjeta.querySelector("h3").textContent;

        let informacion = tarjeta.getAttribute("data-info");

        modalTitle.textContent = titulo;

        modalDescription.textContent = informacion;

        modal.style.display = "block";

    });

});



// =========================
// CERRAR MODAL
// =========================

closeModal.addEventListener("click", function() {

    modal.style.display = "none";

});



// Cerrar modal haciendo clic fuera

window.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});

