import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boss2Component } from './boss2.component';

describe('Boss2Component', () => {
  let component: Boss2Component;
  let fixture: ComponentFixture<Boss2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boss2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boss2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
