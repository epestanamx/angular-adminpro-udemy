import { Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterModule } from "@angular/router";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuard } from "../services/services.index";

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
      {path: 'progress', component: ProgressComponent, data: {titulo: 'Barras de progreso'}},
      {path: 'graficas1', component: Graficas1Component, data: {titulo: 'Graficas'}},
      {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes'}},
      {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
      {path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJS'}},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]}
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
