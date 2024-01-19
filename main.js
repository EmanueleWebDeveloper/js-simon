// Descrizione:
// fruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!


function updateCountdown() {
    const now = new Date();
    const tomorrow930 = new Date(now);
    tomorrow930.setDate(now.getDate() + 1);
    tomorrow930.setHours(9, 30, 0, 0);

    const timeDifference = tomorrow930 - now;

    if (timeDifference > 0) {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('countdown').innerHTML = "la lezione inizia!";
        clearInterval(countdownInterval);
    }
}

// Aggiorna il countdown ogni secondo
const countdownInterval = setInterval(updateCountdown, 1000);

// Esegui l'aggiornamento iniziale
updateCountdown();