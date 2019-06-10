import { Injectable } from '@angular/core';
import { Usuario } from './models/usuario';
import { Admin } from './models/admin';
import { Animal } from './models/animal';
import { Consulta } from './models/consulta';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(public storage: Storage) {

  }
  create(usuario: Usuario) {
    this.storage.set('usuario', usuario);
  }
  createAdmin(admin : Admin){
    this.storage.set('admin', admin);
  }
  createAnimal(animal){
    this.storage.set('animal', animal);
  }
  createConsulta(consulta){
    this.storage.set('consulta', consulta);
  }
  get(): Promise<any> {
    return this.storage.get('usuario');
  }
  getAdmin(): Promise<any> {
    return this.storage.get('admin');
  }
  getAnimal(): Promise<any> {
    return this.storage.get('animal');
  }
  getConsulta(): Promise<any> {
    return this.storage.get('consulta');
  }
  remove() {
     this.storage.clear();
  }
  removeAnimal(){
    this.storage.remove('animal');
  }
  exist() {
    this.get().then(res => {
      if (res) {
        return true;
      } else {
        return false;
      }
    });
  }
}
