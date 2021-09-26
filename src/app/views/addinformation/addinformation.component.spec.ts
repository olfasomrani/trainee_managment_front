import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinformationComponent } from './addinformation.component';

describe('AddinformationComponent', () => {
  let component: AddinformationComponent;
  let fixture: ComponentFixture<AddinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
