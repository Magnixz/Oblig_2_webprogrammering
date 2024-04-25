
// Funksjon for å vise billetene
let billetter = []; // Tomt array til å lagre billetene i

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
        // Oppretter objekt med de innsamlede verdiene
        const billett = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            tlf: tlf,
            epost: epost
        };

        // Legger objektet til i billetter-arrayet
        billetter.push(billett);
        visBilletter();
        resetInputFields();
    } else {
        // Viser feilmeldinger ved siden av inputboksene
        visValideringsmeldinger();
    }
}


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
    // Henter referanser til HTML-elementene som skal oppdateres
    const billettliste = document.getElementById('billettliste');


    // Tømmer innholdet i listene
    billettliste.innerHTML = '';


    // Oppdaterer nye liste-elementer for hver billett
    billetter.forEach((billett, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Billett ${index + 1}: Film: ${billett.film}, Antall: ${billett.antall}, Navn: ${billett.fornavn} ${billett.etternavn}, Telefon: ${billett.tlf}, E-post: ${billett.epost}`;
        billettliste.appendChild(listItem);

    });
}

// Funksjon for å slette alle billettene
function slettBilleter() {
    // Tømmer arrayet og oppdaterer visningen
    billetter = [];
    visBilletter();
}

// Funksjon som tilbakestiller inputfeltene
function resetInputFields() {
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('tlf').value = '';
    document.getElementById('epost').value = '';
}

// Funksjon for å slette alle billettene
function slettBilleter() {
    // Tømmer arrayet og oppdaterer visningen
    billetter = [];
    visBilletter();
}

// Funksjon som tilbakestiller inputfeltene
function resetInputFields() {
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('tlf').value = '';
    document.getElementById('epost').value = '';
}