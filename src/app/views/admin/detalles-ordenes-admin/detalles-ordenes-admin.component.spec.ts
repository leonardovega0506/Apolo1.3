import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesOrdenesAdminComponent } from './detalles-ordenes-admin.component';

describe('DetallesOrdenesAdminComponent', () => {
  let component: DetallesOrdenesAdminComponent;
  let fixture: ComponentFixture<DetallesOrdenesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesOrdenesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesOrdenesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
