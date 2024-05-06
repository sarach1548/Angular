import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsSentCvListComponent } from './positions-sent-cv-list.component';

describe('PositionsSentCvListComponent', () => {
  let component: PositionsSentCvListComponent;
  let fixture: ComponentFixture<PositionsSentCvListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionsSentCvListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionsSentCvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
