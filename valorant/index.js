let attaquants = ["OmenA", "PhoenixA", "JettA", "FadeA", "ChamberA"];

let defenseurs = ["OmenD", "PhoenixD", "JettD", "FadeD", "ChamberD"];

let teams = [attaquants, defenseurs];

let scoreattack = 0;
let scoredefense = 0; 

function killplayer() {
    if (spikeamorce === true) {
        if (Math.random() < 0.7) {
            let randomattaquant = Math.floor(Math.random() * attaquants.length);
            let randomdefenseur = Math.floor(Math.random() * defenseurs.length);
            console.log(
                attaquants[randomattaquant] +
                    " tue " +
                    defenseurs[randomdefenseur]
            );
            defenseurs.splice(randomdefenseur, 1);
        } else {
            let randomdefenseur = Math.floor(Math.random() * defenseurs.length);
            let randomattaquant = Math.floor(Math.random() * attaquants.length);
            console.log(
                defenseurs[randomdefenseur] +
                    " tue " +
                    attaquants[randomattaquant]
            );
            attaquants.splice(randomattaquant, 1);
        }
    } else {
        let ChooseTeam = Math.floor(Math.random() * teams.length);
        if (ChooseTeam === 0) {
            let randomattaquant = Math.floor(Math.random() * attaquants.length);
            let randomdefenseur = Math.floor(Math.random() * defenseurs.length);
            console.log(
                attaquants[randomattaquant] +
                    " tue " +
                    defenseurs[randomdefenseur]
            );
            defenseurs.splice(randomdefenseur, 1);
        } else {
            let randomdefenseur = Math.floor(Math.random() * defenseurs.length);
            let randomattaquant = Math.floor(Math.random() * attaquants.length);
            console.log(
                defenseurs[randomdefenseur] +
                    " tue " +
                    attaquants[randomattaquant]
            );
            attaquants.splice(randomattaquant, 1);
        }
    }
}

function spikeamorce() {
    if (attaquants.length > defenseurs.length) {
        if (Math.random() < 0.6) {
            console.log("Le spike a été amorcé");
            return true;
        } else {
            console.log("Le spike n'a pas été amorcé");
            return false;
        }
    } else {
        if (Math.random() < 0.4) {
            console.log("Le spike a été amorcé");
            return true;
        } else {
            console.log("Le spike n'a pas été amorcé");
            return false;
        }
    }
}

while (scoreattack < 13 && scoredefense < 13) {
    attaquants = ["OmenA", "PhoenixA", "JettA", "FadeA", "ChamberA"];
    defenseurs = ["OmenD", "PhoenixD", "JettD", "FadeD", "ChamberD"];
    let spikeestplante = false;
    while (attaquants.length > 0 && defenseurs.length > 0) {
        killplayer();
        if (!spikeestplante) {
            spikeamorce();
            spikeestplante = true;
        }
    }

    if (attaquants.length === 0) {
        scoredefense++;
        console.log(
            "Les defenseurs ont maintenant un score de " + scoredefense
        );
    } else {
        scoreattack++;
        console.log("Les attaquants ont maintenant un score de " + scoreattack);
    }
}

if (scoreattack === 13) {
    console.log("Victoire des attaquants");
} else {
    console.log("Victoire des defenseurs");
}