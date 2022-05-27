import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScontactoComponent } from './scontacto.component';

describe('ScontactoComponent', () => {
  let component: ScontactoComponent;
  let fixture: ComponentFixture<ScontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScontactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
