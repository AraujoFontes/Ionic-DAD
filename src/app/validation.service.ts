import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  validatorUsuario(dados){
    if(dados.nome_usuario == undefined ){
      return false;
    }
    if(dados.senha == undefined){
      return false;
    }
    if(dados.nome == undefined){
      return false;
    }
    if(dados.sobrenome == undefined){
      return false;
    }
    if(dados.data_nascimento == undefined){
      return false;
    }
    if(dados.cpf == undefined){
      return false;
    }
    if(dados.email == undefined){
      return false;
    }
    if(dados.logradouro == undefined){
      return false;
    }
    if(dados.numero == undefined){
      return false;
    }
    if(dados.bairro == undefined){
      return false;
    }
    if(dados.cidade == undefined){
      return false;
    }
    if(dados.estado == undefined){
      return false;
    }
    if(dados.cep == undefined){
      return false;
    }
    else {
      return true;
    }
  }
  validationLogin(usuario, senha){
    if(usuario == undefined ){
      return false;
    }
    if(senha == undefined){
      return false;
    }
    else{return true};
  }
  validationEfetuar(consulta, observacao){
    if(consulta == undefined ){
      return false;
    }
    if(observacao == undefined){
      return false;
    }
    else{return true};
  }
  validationGestor(usuario, crmv, matricula){
    if(usuario == undefined ){
      return false;
    }
    if(crmv == undefined){
      return false;
    }
    if(matricula == undefined){
      return false;
    }
    else{return true};
  }
  validationCadastroConsulta(animal, data){
    if(animal == undefined ){
      return false;
    }
    if(data == undefined){
      return false;
    }
    else{return true};
  }
  validationCadastroAnimal(dados){
    if(dados.nome == undefined ){
      return false;
    }
    if(dados.historico == undefined){
      return false;
    }
    if(dados.data_nascimento == undefined){
      return false;
    }
    else{return true};
  }
}
