import { Component, EventEmitter, Output } from '@angular/core';
import { Field } from '../../models/Field';
import { positionService } from '../../services/position.service';

@Component({
  selector: 'app-position-filter',
  templateUrl: './position-filter.component.html',
  styleUrls: ['./position-filter.component.scss']
})
export class PositionFilterComponent {
  constructor(private positionSVC: positionService) {

  }  
  fieldsList :(string|Field) []=this.positionSVC.getFields();
  field:Field | string = 'All'
  areasList :(string) []=this.positionSVC.getAreas();
  area:string = 'All'

  @Output ('filterChange') filterChange : EventEmitter<any> = new EventEmitter<any>()

  filter(){
    this.filterChange.emit( {field: this.field, area: this.area});
  }

}