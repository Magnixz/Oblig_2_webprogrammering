// Funksjon for å validere filmvalg
function validerFilm(film) {
    return film !== '';
}

// Funksjon for å validere antall billetter
function validerAntall(antall) {
    return antall > 0;
}

// Funksjon for å validere navn
function validerNavn(navn) {
    return navn.trim() !== '';
}

// Funksjon for å validere telefonnummer
function validerTelefon(tlf) {
    const telefonRegex = /^[0-9]{8}$/;
    return telefonRegex.test(tlf);
}

// Funksjon for å validere e-postadresse
function validerEpost(epost) {
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return epostRegex.test(epost);
}

const valideringsmeldinger = {
    film: 'Vennligst velg en film.',
    antall: 'Vennligst skriv inn et gyldig antall (minst 1).',
    fornavn: 'Vennligst skriv inn fornavnet ditt.',
    etternavn: 'Vennligst skriv inn etternavnet ditt.',
    tlf: 'Vennligst skriv inn et gyldig telefonnummer (8 siffer).',
    epost: 'Vennligst skriv inn en gyldig e-postadresse.'
};

// Funksjon for å kjøpe billeter
function kjop_Billet() {
    // Henter verdiene som blir ført inn i input feltene
    const film = document.getElementById('film').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const tlf = document.getElementById('tlf').value;
    const epost = document.getElementById('epost').value;

    // Sjekker om feltene er gyldige før du oppretter en billett
    if (validerFilm(film) && validerAntall(antall) && validerNavn(fornavn) && validerNavn(etternavn) && validerTelefon(tlf) && validerEpost(epost)) {
        // Sender dataene til serveren ved hjelp av en HTTP POST-anmodning
        fetch('http://localhost:8080/lagre', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                film: film,
                antall: antall,
                fornavn: fornavn,
                etternavn: etternavn,
                tlf: tlf,
                epost: epost
            })
        })
            .then(response => {
                if (response.ok) {
                    // Gjør noe hvis lagringen var vellykket
                    // For eksempel, oppdaterer grensesnittet for å vise en bekreftelsesmelding
                    console.log('Billett lagret vellykket!');
                } else {
                    // Håndter feil her, for eksempel vise en feilmelding til brukeren
                    console.error('Feil ved lagring av billett:', response.statusText);
                }
            })
            .catch(error => {
                // Håndter nettverksfeil her
                console.error('Nettverksfeil:', error);
            });

        // Tilbakestill inputfeltene
        resetInputFields();
    } else {
        // Viser feilmeldinger ved siden av inputboksene
        visValideringsmeldinger();
    }
}

// Funksjon for å vise valideringsmeldinger
function visValideringsmeldinger() {
    const valideringsfunksjoner = {
        film: validerFilm,
        antall: validerAntall,
        fornavn: validerNavn,
        etternavn: validerNavn,
        tlf: validerTelefon,
        epost: validerEpost
    };

    for (const [felt, funksjon] of Object.entries(valideringsfunksjoner)) {
        const feilmeldingElement = document.getElementById(`${felt}-feilmelding`);
        const verdi = document.getElementById(felt).value.trim();

        if (!funksjon(verdi)) {
            feilmeldingElement.textContent = valideringsmeldinger[felt];
        } else {
            feilmeldingElement.textContent = ''; // Tømmer feilmeldingen hvis valideringen er vellykket
        }
    }
}

// Funksjon for å vise billetene
function visBilletter() {
    // Henter referanse til HTML-elementet som skal vise billettene
    const billettliste = document.getElementById('billettliste');

    // Tømmer innholdet i billettlisten
    billettliste.innerHTML = '';

    // Oppdaterer listen med nye billett-elementer
    billetter.forEach((billett, index) => {
        // Opprett et nytt li-element for hver billett
        const listItem = document.createElement('li');

        // Legg til tekstinnholdet med billettdetaljer
        listItem.textContent = `Billett ${index + 1}: Film: ${billett.film}, Antall: ${billett.antall}, Navn: ${billett.fornavn} ${billett.etternavn}, Telefon: ${billett.tlf}, E-post: ${billett.epost}`;

        // Legg til det nye li-elementet til billettlisten
        billettliste.appendChild(listItem);
    });
}


// Funksjon som tilbakestiller inputfeltene
function resetInputFields() {
    document.getElementById('film').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('tlf').value = '';
    document.getElementById('epost').value = '';
}
