import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SliderComponent } from './slider/slider.component';
import { ModalAlumComponent } from '../m-login-r/modal-alum/modal-alum.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../app-routing.module';

import { InfoComponent } from './info/info.component';
import { RegistroComponent } from '../m-login-r/registro/registro.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    InicioComponent,
    SliderComponent,
    ModalAlumComponent,
    InfoComponent,
    RegistroComponent
  ],
    imports: [
        CommonModule,
        NgbModule,
        AppRoutingModule,
        ReactiveFormsModule
    ]
})
export class MInicioModule { }
