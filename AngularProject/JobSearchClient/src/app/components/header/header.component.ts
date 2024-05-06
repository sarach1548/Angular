import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Field } from '../../models/Field';
import { User } from '../../models/User';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  isConnect: string | null = localStorage.getItem('user')
  currentUser: User | null = this.isConnect ? JSON.parse(this.isConnect) : null

  active:string|null=""
  getField() {
    if (this.currentUser)
      return Field[this.currentUser.jobSearchField].toLowerCase()
    return 'positions';
  }
}