import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Field } from '../../models/Field';
import { Job } from '../../models/Job';
import { positionService } from '../../services/position.service';
@Component({
  selector: 'app-positions-page',
  templateUrl: './positions-page.component.html',
  styleUrls: ['./positions-page.component.scss']
})
export class PositionsPageComponent implements OnInit{
  constructor(private positionSvc:positionService, private actRouter:ActivatedRoute,private router:Router){
  }
  jobsforView:Job[] =[]
  positionsSentCv:string[]=[]

  ngOnInit(): void {
    
    if (localStorage.getItem('user') === null) {
      alert('User not logged in! Please log in! ')
      this.router.navigate([`/login`])
    }

    this.actRouter.params.subscribe(params=>
      {
        let field=params['field']
        console.log(field);
        this.jobsforView=this.positionSvc.filterJobs(field,null);
      }
    ) 
  
    this.positionsSentCv=JSON.parse(localStorage.getItem('user')!).jobsSentCV;
  }

  filterChange($event:any){
    let filterDetails = $event
    this.jobsforView=this.positionSvc.filterJobs(filterDetails.field,filterDetails.area);
  }
  
}
