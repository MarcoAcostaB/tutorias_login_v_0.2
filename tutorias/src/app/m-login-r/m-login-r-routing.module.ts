import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecuperaContraComponent} from './recupera-contra/recupera-contra.component';
import {RegistroComponent} from './registro/registro.component';
import {CodigoVeriContraComponent} from './codigo-veri-contra/codigo-veri-contra.component';
import {NewContraComponent} from './new-contra/new-contra.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'registro', component: RegistroComponent},
      {path: 'olvideMiContraseña', component: RecuperaContraComponent},
      {path: 'codeVerifica', component: CodigoVeriContraComponent},
      {path: 'newContraseña', component: NewContraComponent},
      {path: 'usuario', component: UserComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MLoginRRoutingModule { }



