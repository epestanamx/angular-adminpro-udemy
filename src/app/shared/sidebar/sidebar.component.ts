import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuariosService } from '../../services/services.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public _sidebar: SidebarService, public _usuariosService: UsuariosService) { }

  ngOnInit() {
  }

}
