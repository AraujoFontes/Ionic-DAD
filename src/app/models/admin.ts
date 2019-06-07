export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto);
    }
}
//classe usuario extendendo a classe Model
export class Admin extends Model {
    CRMV: string;
    matricula: string;
}
