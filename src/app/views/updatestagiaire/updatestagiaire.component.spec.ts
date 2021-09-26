import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestagiaireComponent } from './updatestagiaire.component';

describe('UpdatestagiaireComponent', () => {
  let component: UpdatestagiaireComponent;
  let fixture: ComponentFixture<UpdatestagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
