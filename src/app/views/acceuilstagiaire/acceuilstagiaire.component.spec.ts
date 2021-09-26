import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilstagiaireComponent } from './acceuilstagiaire.component';

describe('AcceuilstagiaireComponent', () => {
  let component: AcceuilstagiaireComponent;
  let fixture: ComponentFixture<AcceuilstagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilstagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilstagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
