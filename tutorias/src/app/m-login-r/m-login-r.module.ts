import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MLoginRRoutingModule } from './m-login-r-routing.module';
import {RecuperaContraComponent} from './recupera-contra/recupera-contra.component';
import {RegistroComponent} from './registro/registro.component';
import {NewContraComponent} from './new-contra/new-contra.component';
import {CodigoVeriContraComponent} from './codigo-veri-contra/codigo-veri-contra.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    RecuperaContraComponent,
    NewContraComponent,
    CodigoVeriContraComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    MLoginRRoutingModule
  ]
})
export class MLoginRModule { }
