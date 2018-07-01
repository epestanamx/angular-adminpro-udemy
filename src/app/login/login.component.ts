import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../services/services.index';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame: boolean = false;

  constructor(public router: Router, public _usuariosService: UsuariosService) { }

  ngOnInit() {
    init_plugins();

    this.email = localStorage.getItem('email') || '';
    if(this.email != '') {
      this.recuerdame = true;
    }
  }

  ingresar(forma: NgForm) {
    if(forma.invalid) {
      return;
    }

    const usuario = new Usuario('', forma.value.email, forma.value.password);

    this._usuariosService.login(usuario, this.recuerdame)
      .subscribe(response => this.router.navigate(['/dashboard']));
  }

}
