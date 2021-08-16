import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablePagComponent } from './data-table-pag.component';

describe('DataTablePagComponent', () => {
  let component: DataTablePagComponent;
  let fixture: ComponentFixture<DataTablePagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTablePagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablePagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
