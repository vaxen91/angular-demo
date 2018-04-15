import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1FormComponent } from './ex1-form.component';

describe('Ex1FormComponent', () => {
  let component: Ex1FormComponent;
  let fixture: ComponentFixture<Ex1FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
