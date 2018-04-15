import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2FormComponent } from './ex2-form.component';

describe('Ex2FormComponent', () => {
  let component: Ex2FormComponent;
  let fixture: ComponentFixture<Ex2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
