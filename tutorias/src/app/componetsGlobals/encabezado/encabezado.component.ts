import { Component} from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
  providers: [AuthService],
})
export class EncabezadoComponent {
  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private router: Router) { }

  // tslint:disable-next-line:typedef
  async onLogout(){
    try {
      await this.authSvc.logout();
      this.router.navigate(['/home']);
    }
    catch (e) {
      console.log(e);
    }
   }

}
