import { Component } from '@angular/core';
import { User } from '../../models/User';
import { Field } from '../../models/Field';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private router: Router) {

  }

  isConnect: string | null = localStorage.getItem('user')
  currentUser: User | null = this.isConnect ? JSON.parse(this.isConnect) : null

  getField() {
    if (this.currentUser) {
      console.log(this.currentUser.cVsSentsAmount);
      
      return Field[this.currentUser.jobSearchField].toLowerCase()
    }
    return 'positions';
  }
  // positionOnclick() {
  //   if (this.currentUser)
  //     this.router.navigate([`positions/${this.getField()}`])
  //   else {
  //     alert('User not logged in! Please login! ')
  //     this.router.navigate([`/login`])

  //   }

  // }






}