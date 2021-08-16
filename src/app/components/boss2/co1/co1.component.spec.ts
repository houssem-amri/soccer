import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co1Component } from './co1.component';

describe('Co1Component', () => {
  let component: Co1Component;
  let fixture: ComponentFixture<Co1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
