export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto);
    }
}
//classe usuario extendendo a classe Model
export class Animal extends Model {
    nome: string;
    historico: string;
    data_nascimento: string;

}
