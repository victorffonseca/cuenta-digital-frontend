import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonasCuentasComponent } from './lista-personas-cuentas.component';

describe('ListaPersonasCuentasComponent', () => {
  let component: ListaPersonasCuentasComponent;
  let fixture: ComponentFixture<ListaPersonasCuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPersonasCuentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPersonasCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
