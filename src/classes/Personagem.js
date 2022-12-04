const { AbstractRepository } = require('typeorm');
const CollectionClass = require('./collections');
const collection = CollectionClass.geral();


class Personagem {
    constructor(){
        console.log('começou')
    }


    randomAtaque(max) {
        return Math.floor(Math.random() * max);
    }

    async atacar(oponente, desafiador) {
        const personagem_c = collection.find(personagem => personagem.nome === desafiador);
        const oponente_c = collection.find(personagem => personagem.nome === oponente);

        if (personagem_c.mimico == true) {
            module.exports.clonar(oponente_c, personagem_c);
        }

        const atq_pers_c = module.exports.randomAtaque(Object.keys(personagem_c.poderes).length);

        const index_atq_pers = personagem_c.poderes[atq_pers_c];
        console.log(index_atq_pers)

        if (index_atq_pers.pe <= personagem_c.pe) {
            personagem_c.pe = personagem_c.pe - index_atq_pers.pe;

            console.log(personagem_c.nome + ' usou seu poder ' + index_atq_pers.nome + ' em ' + oponente_c.nome + '. Dano causado: ' + index_atq_pers.dano);

            if (personagem_c.mimico == true) {
                module.exports.removerClone(personagem_c);
            }

        } else {
            console.log(personagem_c.nome + ' esta esgotado. Usou esse turno para se recuperar!');
            module.exports.recuperar(personagem_c)
        }

    }

    recuperar(personagem) {
        personagem.pe = personagem.pe + (personagem.peInicial * 0.3);
    }

    recuperarTudo(personagem) {
        personagem.pf = personagem.pfInicial;
    }

    drenar(oponente, personagem) {
        personagem.peInicial = personagem.peInicial + oponente.pe;
        console.log(oponente.nome + ' drenado por ' + personagem.nome)
    }

    clonar(oponente, personagem) {
        Object.keys(oponente.poderes).forEach(key => {
            personagem.poderes.push(oponente.poderes[key]);
        });
        console.log(oponente.nome + ' teve seus poderes clonado por ' + personagem.nome)
    }

    removerClone(personagem) {
        personagem.poderes = [];
        console.log(personagem.nome + ' perdeu os poderes clonado após o ataque')
    }


    adicionarPoder(poder, personagem_nome) {
        const personagem_c = collection.find(personagem => personagem.nome === personagem_nome);
        personagem_c.poderes.push(poder);
    }

    removerPoder(poder_nome, personagem_nome) {
        const personagem_c = collection.find(personagem => personagem.nome === personagem_nome);
        personagem_c.poderes.poder = null;
    }

    getPoder(personagem_nome) {
        const personagem_c = collection.find(personagem => personagem.nome === personagem_nome);
        return personagem_c;
    }

    getPersonagens() {
        return collection;
    }
}

module.exports = new Personagem();