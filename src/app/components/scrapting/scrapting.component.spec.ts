import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScraptingComponent } from './scrapting.component';

describe('ScraptingComponent', () => {
  let component: ScraptingComponent;
  let fixture: ComponentFixture<ScraptingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScraptingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
