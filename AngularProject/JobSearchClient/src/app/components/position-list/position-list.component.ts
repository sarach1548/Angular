import { Component, OnInit } from '@angular/core';
import { positionService } from '../../services/position.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrl: './position-list.component.css'
})
export class PositionListComponent implements OnInit{
 constructor(private positionSVC:positionService,private router:Router){

 }
  ngOnInit(): void {
    if(localStorage.getItem('user')===null){
          alert('User not logged in! Please login! ')
          this.router.navigate([`/login`])
        }
  }
}
