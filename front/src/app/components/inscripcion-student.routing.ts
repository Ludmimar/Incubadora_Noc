import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionStudentComponent } from './inscripcion-student/inscripcion-student.component';

const routes: Routes = [

  {

    path: '',
    component: InscripcionStudentComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionRoutingModule { }
