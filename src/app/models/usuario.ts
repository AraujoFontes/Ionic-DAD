export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto);
    }
}
//classe usuario extendendo a classe Model
export class Usuario extends Model {
    nome_usuario: string;
    nome: string;
    sobrenome: string;
    cpf: string;
    data_nascimento: string;
    email: string;
    qtdanimais: string;
    logradouro : string;
    bairro: string;
    cidade: string;
    estado: string;
    numero: string;
    admin: boolean;
}
