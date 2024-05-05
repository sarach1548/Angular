import { Component } from '@angular/core';
import { LoginService } from '../../services/Login.service';
import { Router } from "@angular/router"
import { Field } from '../../models/Field';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginSVC: LoginService, private router: Router) {

  }
  userData: any = { username: '', password: '' }
  loginClick() {
    this.loginSVC.getUserFromServer(this.userData.username, this.userData.password).subscribe((res: any) => {
      if (res != null) {
        res.password = 'secret';
        localStorage.setItem('user', JSON.stringify(res));
        alert(` ברוך הבא ${this.userData.username}!`);
        this.router.navigate([`positions/${Field[res.jobSearchField]}`])
      }
      else {
        localStorage.setItem('user', '');
        alert("user not exist ☹️ !")
      }
    }
    );
  }
}