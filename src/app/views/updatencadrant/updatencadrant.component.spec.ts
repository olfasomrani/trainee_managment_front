import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatencadrantComponent } from './updatencadrant.component';

describe('UpdatencadrantComponent', () => {
  let component: UpdatencadrantComponent;
  let fixture: ComponentFixture<UpdatencadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatencadrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatencadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
