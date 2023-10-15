class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        return Math.random() < this.luck;
    }

    attackPokemon(opponent) {
        if (this.isLucky()) {
            console.log(opponent.name + " a eu de la chance");
        } else {
            let damage = this.attack - opponent.defense;
            opponent.hp -= damage;
            console.log(
                this.name +
                    " a infligé des dégats à " +
                    opponent.name +
                    " il lui reste " +
                    opponent.hp
            );
        }
    }
}

let snorlax = new Pokemon("Snorlax", 110, 65, 160, 0.3);
let gengar = new Pokemon("Gengar", 65, 90, 60, 0.8);

while (gengar.hp > 0 && snorlax.hp > 0) {
    snorlax.attackPokemon(gengar);
    console.log("Vie restante de " + gengar.name + " : " + gengar.hp);
    if (gengar.hp <= 0) {
        console.log(
            gengar.name + " est vaincu, " + snorlax.name + " remporte le combat"
        );
        break;
    }

    gengar.attackPokemon(snorlax);
    console.log(`Vie restante de ${snorlax.name} : ${snorlax.hp} `);

    if (snorlax.hp <= 0) {
        console.log(
            snorlax.name + "est vaincu, " + gengar.name + " remporte le combat"
        );
        break;
    }
}
