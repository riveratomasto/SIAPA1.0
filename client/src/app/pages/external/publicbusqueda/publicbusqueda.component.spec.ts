import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicbusquedaComponent } from './publicbusqueda.component';

describe('PublicbusquedaComponent', () => {
  let component: PublicbusquedaComponent;
  let fixture: ComponentFixture<PublicbusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicbusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicbusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
