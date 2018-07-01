import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Services
import { SettingsService, SharedService, SidebarService, UsuariosService, LoginGuard } from './services.index';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuariosService,
    LoginGuard
  ]
})
export class ServiceModule { }
