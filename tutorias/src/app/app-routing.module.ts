import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './m-inicio/inicio/inicio.component';
import {ContactoComponent} from './m-contacto/contacto/contacto.component';
import {AyudaComponent} from './m-ayuda/ayuda/ayuda.component';
import {SendEmailComponent} from './auth/send-email/send-email.component';


const routes: Routes = [
  {path: '' , component: InicioComponent},
  {path: 'home' , component: InicioComponent},
  {path: 'contacto' , component: ContactoComponent},
  {path: 'ayuda' , component: AyudaComponent},
  {path: 'login' , loadChildren: () => import('./m-login-r/m-login-r.module').then(m => m.MLoginRModule)},
  {path: 'verificacion-email', component: SendEmailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
