import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co3Component } from './co3.component';

describe('Co3Component', () => {
  let component: Co3Component;
  let fixture: ComponentFixture<Co3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
