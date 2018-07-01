import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient, public router: Router) {
    this.cargarStorage();
  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';

    return this.http.post(url, usuario)
      .pipe(
        map((response: any) => {
          swal('Usuario creado', usuario.email, 'success');
          return response.usuario;
        })
      )
  }

  login(usuario: Usuario, recordar: boolean = false) {

    if(recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';

    return this.http.post(url, usuario)
      .pipe(
        map((response: any) => {
          this.guardarStorage(response.id, response.token, response.usuario);
          return true;
        })
      )
  }

  logout() {
    this.token = null;
    this.usuario = null;
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  guardarStorage(id, token, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  cargarStorage() {
    if(localStorage.getItem('token')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.token = localStorage.getItem('token');
    }
  }

  estaLogueado() {
    return (this.token) ? true : false;
  }
}
