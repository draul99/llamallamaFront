import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompracComponent } from './components/comprac/comprac.component';
import { LoginComponent } from './components/login/login.component';
import { NavegaciontiendaComponent } from './components/navegaciontienda/navegaciontienda.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'tiendas', component: NavegaciontiendaComponent},
  {path: 'compra/:id', component:CompracComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
