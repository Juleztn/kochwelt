let links = document.getElementById("myLinks");
let overlay = document.getElementById("overlay");
let screen = window.matchMedia("(min-width: 800px)");

// Portionen berechnen
function calculatePortions() {
    let inputValue = document.getElementById('value');
    inputValue = parseFloat(inputValue.value);
    let spanAmount = document.getElementsByClassName('amount');
    let error = document.getElementById('false');

    if (inputValue > 20 || inputValue < 1) {
        error.innerHTML = "Bitte Portionsgröße zwischen 1 und 20 angeben"
    } else

        for (let i = 0; i < spanAmount.length; i++) {
            let original = spanAmount[i].getAttribute('data-original');
            spanAmount[i].innerHTML = original * inputValue;
            error.innerHTML = "";
        }

}

// onclick burger-menu, wenn display: flex dann display: none und andersrum
function toggleNavbar() {
    if (links.style.display === "flex") {
        links.style.display = "none";
        document.getElementById("img").src = "./img/icons/menu-black.svg";
    } else {
        links.style.display = "flex";
        document.getElementById("img").src = "./img/icons/close-black.svg";
    }
    overlay.classList.toggle('d_none');
}

// wenn Bildschirmbreite über 800px ist werden die links ausgeblendet
function screenWidthAdjust(screen) {
    if (screen.matches) { // If media query matches
        links.style.display = "none";
        document.getElementById("img").src = "./img/icons/menu-black.svg";
    }

}

// myFunction(screen) wird ausgeführt wenn die Bildschirmbreite über 800px ist
screen.addEventListener("change", function () {
    screenWidthAdjust(screen);
});


// Kontakt Formular 
function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("https://formspree.io/f/xkgbvwpg", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}
