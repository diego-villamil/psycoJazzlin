import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SserviciosComponent } from './sservicios.component';

describe('SserviciosComponent', () => {
  let component: SserviciosComponent;
  let fixture: ComponentFixture<SserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
