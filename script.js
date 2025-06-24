// Portionen berechnen

function calculatePortions() {
    let inputValue = document.getElementById('value');
    inputValue = parseFloat(inputValue.value);
    let spanAmount = document.getElementsByClassName('amount');
    let error = document.getElementById('false');

    if (inputValue > 15 || inputValue < 1) {
        error.innerHTML = "Bitte Portionsgröße zwischen 1 und 15 angeben"
    } else

        for (let i = 0; i < spanAmount.length; i++) {
            let original = spanAmount[i].getAttribute('data-original');
            spanAmount[i].innerHTML = original * inputValue;
            error.innerHTML = "";
        }

}




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
