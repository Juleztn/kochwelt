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


// not used, but successfully created, by Fatih:

function anpassen() {
    // Wert der eingegebenen Portionen aus dem Eingabefeld holen
    let portionen = document.getElementById('portionen').value;

    // Zutatenliste holen
    let zutatenListe = document.getElementById('zutatenListe').getElementsByTagName('td');

    // Überprüfen, ob die eingegebene Anzahl der Portionen zwischen 1 und 20 liegt
    if (portionen < 1 || portionen > 20) {
        alert("Bitte geben Sie eine Zahl zwischen 1 und 20 ein.");
        return; // Funktion beenden, wenn die Anzahl nicht im gültigen Bereich liegt
    }

    // Schleife durch jede Zutat in der Zutatenliste
    for (let i = 0; i < zutatenListe.length; i++) {
        // Ursprüngliche Menge der Zutat holen
        let menge = zutatenListe[i].getAttribute('data-menge');

        // Wenn eine Menge angegeben ist, neue Menge berechnen und aktualisieren
        if (menge) {
            let neueMenge = menge * portionen / 4; // Annahme: Originalrezept ist für 4 Portionen
            // Text der Zutat aktualisieren mit der neuen Menge
            zutatenListe[i].innerText = `${neueMenge} ${zutatenListe[i].innerText.split(' ').slice(1).join(' ')}`;
        }
    }
}