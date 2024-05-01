import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionStudentComponent } from './inscripcion-student.component';

describe('InscripcionStudentComponent', () => {
  let component: InscripcionStudentComponent;
  let fixture: ComponentFixture<InscripcionStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscripcionStudentComponent]
    });
    fixture = TestBed.createComponent(InscripcionStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
