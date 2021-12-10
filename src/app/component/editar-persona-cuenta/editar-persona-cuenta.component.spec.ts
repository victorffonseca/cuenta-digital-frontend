import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonaCuentaComponent } from './editar-persona-cuenta.component';

describe('EditarPersonaCuentaComponent', () => {
  let component: EditarPersonaCuentaComponent;
  let fixture: ComponentFixture<EditarPersonaCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPersonaCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPersonaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
