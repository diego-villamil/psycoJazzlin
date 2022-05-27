import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinicioComponent } from './sinicio.component';

describe('SinicioComponent', () => {
  let component: SinicioComponent;
  let fixture: ComponentFixture<SinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
