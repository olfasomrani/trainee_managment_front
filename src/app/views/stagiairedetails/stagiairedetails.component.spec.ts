import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiairedetailsComponent } from './stagiairedetails.component';

describe('StagiairedetailsComponent', () => {
  let component: StagiairedetailsComponent;
  let fixture: ComponentFixture<StagiairedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagiairedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiairedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
