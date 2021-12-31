/*let nome: string;
let idade: number;
let maiorIdade: boolean;


nome = 'treinaweb'

idade =  13
console.log(idade)
maiorIdade = false*/
/* let cachorro: IAnimal = {
    nome: 'Rex',
    idade: 0,
    estaVivo: false,

    nascer(){
        this.estaVivo = true
        return console.log(`o ${this.nome} nasceu!`)
    },

    crescer(){
        this.idade++;
        return console.log(`o ${this.nome} cresceu`)
    },

    morrer(){
        this.estaVivo = false;
        this.idade = 0
        return console.log(`o ${this.nome} morreu`)
    }
} */
class Animal {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this._idade = idade;
        this._estaVivo = estaVivo;
    }
    get estaVivo() {
        return this._estaVivo;
    }
    get idade() {
        return this._idade;
    }
    set estaVivo(status) {
        this._estaVivo = status;
    }
    nascer() {
        this._estaVivo = true;
        return console.log(`o ${this.nome} nasceu! ${this._estaVivo}`);
    }
    ;
    crescer() {
        this._idade++;
        return console.log(`o ${this.nome} cresceu`);
    }
    ;
    morrer() {
        this._estaVivo = false;
        this._idade = 0;
        return console.log(`o ${this.nome} morreu`);
    }
    ;
}
let cachorro = new Animal('Totó', 0, false);
cachorro.nascer();
console.log(cachorro.idade);
cachorro.estaVivo = false;
console.log(cachorro.estaVivo);

