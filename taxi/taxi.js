const personnage = {
    name: "John",
    health: 10,
};

const musics = [
    "Anissa - Wejdene",
    "Bed - J.Holiday",
    "Full Moon - Brandy",
    "U should've Known Better - Monica",
    "Steelo - 702",
];

const trajet = {
    trafficlights: 30,
    changes: 0,
};

while (trajet.trafficlights > 0 && personnage.health > 0) {
    let random = Math.floor(Math.random() * musics.length);
    if (random === 0) {
        personnage.health -= 1;
        trajet.changes += 1;
    }

    console.log(
        "Musique: " + musics[random] + " Feux restants:" + trajet.trafficlights
    );

    trajet.trafficlights -= 1;
}

if (trajet.trafficlights === 0) {
    console.log(
        "John est arrivé à destination en " +
            trajet.changes +
            " changements de taxi."
    );
} else {
    console.log("Explosion");
}
