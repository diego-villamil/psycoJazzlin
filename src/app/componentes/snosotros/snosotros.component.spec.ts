import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnosotrosComponent } from './snosotros.component';

describe('SnosotrosComponent', () => {
  let component: SnosotrosComponent;
  let fixture: ComponentFixture<SnosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
