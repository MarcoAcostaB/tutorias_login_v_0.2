import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from '../../cargar-scripts.service';
import {FormGroup, FormControl} from '@angular/forms';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AuthService],
})
export class RegistroComponent implements OnInit {
  registerForm = new FormGroup({
    email: new  FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, private  router: Router){

  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  async onRegister(){
    const {email, password} = this.registerForm.value;
    try {
const user = await this.authSvc.register(email, password);
if (user){
/*  redirigir*/
  this.router.navigate(['/login/usuario']);
}
    }
    catch (e) {
      console.log(e);
    }
    this.authSvc.register(email, password);
  }

}
