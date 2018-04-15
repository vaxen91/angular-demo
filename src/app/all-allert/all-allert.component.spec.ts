import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAllertComponent } from './all-allert.component';

describe('AllAllertComponent', () => {
  let component: AllAllertComponent;
  let fixture: ComponentFixture<AllAllertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAllertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAllertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
