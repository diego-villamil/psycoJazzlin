import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequipoComponent } from './sequipo.component';

describe('SequipoComponent', () => {
  let component: SequipoComponent;
  let fixture: ComponentFixture<SequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
