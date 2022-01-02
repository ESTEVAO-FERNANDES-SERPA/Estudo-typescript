/*let nome: string;
let idade: number;
let maiorIdade: boolean;


nome = 'treinaweb'

idade =  13
console.log(idade)
maiorIdade = false*/

import { createScanner } from "./node_modules/typescript/lib/typescript"


/* let a: (2 | string)[] = []

a.push('batata')
a.push(2)
console.log(a) */

/* type TipoArray = (number | string)[];

let a: TipoArray = [1,2,3,"treinaweb"]

type Animal = {
    nome:string;
    idade?:number; //idade fica opacional
}

let cachorro: Animal;

cachorro= {
    nome:"batata",
    idade:10,
}

console.log(cachorro) */

/* 
enum produtoStatus{
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3
}

function checarProdutosStus(status:number){
    switch(status){
        case produtoStatus.Ativo:
            console.log('produto disponivel');
            break;

        case produtoStatus.Inativo:
            console.log('produto não disponivel');
            break;

        case produtoStatus.Indisponivel:
            console.log('produto aguardando estoque');
            break;
    }
}

checarProdutosStus(produtoStatus.Inativo) */

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer: ()=>void;
    crescer (): void;
    morrer(): void;
}

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

class Animal implements IAnimal{
    nome: string;
    private _idade:number;
    private _estaVivo:boolean;

    get estaVivo(): boolean{
        return this._estaVivo;
    }

    get idade(): number{
        return this._idade;
    }

    set estaVivo(status: boolean){
         this._estaVivo = status;
    }

    constructor(nome: string, idade: number, estaVivo: boolean){
        this.nome = nome;
        this._idade = idade;
        this._estaVivo= estaVivo;
    }

    nascer(){
        this._estaVivo = true
        return console.log(`o ${this.nome} nasceu! ${this._estaVivo}`)
    };

    crescer(){
        this._idade++;
        return console.log(`o ${this.nome} cresceu`)
    };

    morrer(){
        this._estaVivo = false;
        this._idade = 0
        return console.log(`o ${this.nome} morreu`)
    };
}

let cachorro = new Animal('Totó', 0, false);

cachorro.nascer()
console.log(cachorro.idade)
cachorro.estaVivo = false
console.log(cachorro.estaVivo)
console.log(cachorro)