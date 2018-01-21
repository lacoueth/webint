import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AverageAndGraphComponent } from './shared-components/average-and-graph/average-and-graph.component';
import { NameAndPicComponent } from './shared-components/name-and-pic/name-and-pic.component';
import { DateAndTimeComponent } from './shared-components/date-and-time/date-and-time.component';
import { StudentCardComponent } from './shared-components/student-card/student-card.component';
import { KholleGroupComponent } from './kholleur/kholle-group/kholle-group.component';
import { KholleGroupDetailComponent } from './kholleur/kholle-group-detail/kholle-group-detail.component';
import { StudentDetailComponent } from './kholleur/kholle-group-detail/student-detail/student-detail.component';
import { MatiereCardComponent } from './student/matiere-card/matiere-card.component';
import { KholleCardComponent } from './shared-components/kholle-card/kholle-card.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { KholleurHomeComponent } from './kholleur/kholleur-home/kholleur-home.component';
import { ProfessorHomeComponent } from './professor/professor-home/professor-home.component';
import { KholleurGroupPageComponent } from './kholleur/kholleur-group-page/kholleur-group-page.component';
import {RouterModule} from '@angular/router';
import {routesConfig} from './router.config';
import {StudentDataServiceResolver} from './service/resolvers/student-data.service.resolver';
import { StudentMatierePageComponent } from './student/student-matiere-page/student-matiere-page.component';
import {ProfessorDataServiceResolver} from './service/resolvers/professor-data.service.resolver';
import { ProfessorStudentPageComponent } from './professor/professor-student-page/professor-student-page.component';
import { ExerciceFormComponent } from './kholleur/kholle-group-detail/student-detail/exercice-form/exercice-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AverageAndGraphComponent,
    NameAndPicComponent,
    DateAndTimeComponent,
    StudentCardComponent,
    KholleGroupComponent,
    KholleGroupDetailComponent,
    StudentDetailComponent,
    MatiereCardComponent,
    KholleCardComponent,
    StudentHomeComponent,
    KholleurHomeComponent,
    ProfessorHomeComponent,
    KholleurGroupPageComponent,
    StudentMatierePageComponent,
    ProfessorStudentPageComponent,
    ExerciceFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [
    StudentDataServiceResolver,
    ProfessorDataServiceResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
