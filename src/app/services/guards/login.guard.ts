import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public _usuariosService: UsuariosService, public router: Router) { }

  canActivate() {
    if(this._usuariosService.estaLogueado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
