import { LoginService } from '../../services/Login.service';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginSVC: LoginService) {

  }
  userData: any = { username: '', password: '' }

  submitted: boolean = false;


  loginClick() {
    this.loginSVC.getUserFromServer(this.userData.username,this.userData.password) .subscribe((res: any) => {
     if( res !=null){
       localStorage.setItem('user', JSON.stringify(res));
       alert(` ברוך הבא ${this.userData.username}!`);
       ///link 
      }
      else{
         localStorage.setItem('user', '');
         alert("שם משתמש או סיסמה שגויים")
      }
      console.log(res);
  });
}




}