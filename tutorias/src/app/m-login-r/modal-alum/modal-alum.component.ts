import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-alum',
  templateUrl: './modal-alum.component.html',
  styleUrls: ['./modal-alum.component.css'],
  providers: [AuthService],
})
export class ModalAlumComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private autSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  async onLogin() {
    const {email, password} = this.loginForm.value;
    try {
    const user = await this.autSvc.login(email, password);
    if (user){
      /*redireccionamiento a /logon/user*/
      this.router.navigate(['/login/usuario']);
    }
    }catch (e) {
      console.log(e);
    }
  }
}
