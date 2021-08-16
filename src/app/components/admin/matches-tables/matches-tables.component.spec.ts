import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesTablesComponent } from './matches-tables.component';

describe('MatchesTablesComponent', () => {
  let component: MatchesTablesComponent;
  let fixture: ComponentFixture<MatchesTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
