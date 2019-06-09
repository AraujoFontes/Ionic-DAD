export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto);
    }
}
//classe usuario extendendo a classe Model
export class Consulta extends Model {
    status: string;
    observacoes: string;
    data_hora: string;
    nome_admin: string;
}
