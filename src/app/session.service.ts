import { Injectable } from '@angular/core';
import { Usuario } from './models/usuario';
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

  get(): Promise<any> {
    return this.storage.get('usuario');
  }
  remove() {
    this.storage.remove('usuario');
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
