import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co4Component } from './co4.component';

describe('Co4Component', () => {
  let component: Co4Component;
  let fixture: ComponentFixture<Co4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
