import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantdetailsComponent } from './encadrantdetails.component';

describe('EncadrantdetailsComponent', () => {
  let component: EncadrantdetailsComponent;
  let fixture: ComponentFixture<EncadrantdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
