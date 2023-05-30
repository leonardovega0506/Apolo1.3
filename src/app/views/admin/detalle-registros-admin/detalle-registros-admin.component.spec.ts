import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRegistrosAdminComponent } from './detalle-registros-admin.component';

describe('DetalleRegistrosAdminComponent', () => {
  let component: DetalleRegistrosAdminComponent;
  let fixture: ComponentFixture<DetalleRegistrosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRegistrosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRegistrosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
