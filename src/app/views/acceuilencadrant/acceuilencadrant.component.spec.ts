import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilencadrantComponent } from './acceuilencadrant.component';

describe('AcceuilencadrantComponent', () => {
  let component: AcceuilencadrantComponent;
  let fixture: ComponentFixture<AcceuilencadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilencadrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilencadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
