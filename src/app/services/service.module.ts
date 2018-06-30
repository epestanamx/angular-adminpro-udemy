import { NgModule } from '@angular/core';

// Services
import { SettingsService, SharedService, SidebarService } from './services.index';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ]
})
export class ServiceModule { }
