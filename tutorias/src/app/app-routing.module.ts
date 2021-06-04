import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './m-inicio/inicio/inicio.component';
import {ContactoComponent} from './m-contacto/contacto/contacto.component';
import {AyudaComponent} from './m-ayuda/ayuda/ayuda.component';


const routes: Routes = [
  {path: '' , component: InicioComponent},
  {path: 'home' , component: InicioComponent},
  {path: 'contacto' , component: ContactoComponent},
  {path: 'ayuda' , component: AyudaComponent},
  {path: 'login' , loadChildren: () => import('./m-login-r/m-login-r.module').then(m => m.MLoginRModule)},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
