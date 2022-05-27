import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContactenosComponent } from './formulario-contactenos.component';

describe('FormularioContactenosComponent', () => {
  let component: FormularioContactenosComponent;
  let fixture: ComponentFixture<FormularioContactenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioContactenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioContactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
