import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EncabezadoComponent } from './componetsGlobals/encabezado/encabezado.component';
import { PieComponent } from './componetsGlobals/pie/pie.component';
import {MInicioModule} from './m-inicio/m-inicio.module';
import {MAyudaModule} from './m-ayuda/m-ayuda.module';
import {MContactoModule} from './m-contacto/m-contacto.module';
import {SliderImgServices} from './services/sliderImg.services';
import {CargarScriptsService} from './cargar-scripts.service';
import {MLoginRRoutingModule} from './m-login-r/m-login-r-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { SendEmailComponent } from './auth/send-email/send-email.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    SendEmailComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MInicioModule,
    MAyudaModule,
    MContactoModule,
    MLoginRRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    SliderImgServices,
    CargarScriptsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


