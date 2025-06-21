// Portionen berechnen

function calculatePortions() {
    let inputValue = document.getElementById('value');
    let spanAmount = document.getElementsByClassName('amount');
    let error = document.getElementById('false');

    if (inputValue.value > 15) {
        error.innerHTML = "Bitte andere Portionsgröße angeben"
    } else

    for (let i = 0; i < spanAmount.length; i++) {
        let original = spanAmount[i].getAttribute('data-original');
        spanAmount[i].innerHTML = original * inputValue.value;
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
