import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaDigitalComponent } from './crear-cuenta-digital.component';

describe('CrearCuentaDigitalComponent', () => {
  let component: CrearCuentaDigitalComponent;
  let fixture: ComponentFixture<CrearCuentaDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCuentaDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCuentaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
