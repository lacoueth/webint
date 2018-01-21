import {Route} from '@angular/router';
import {StudentHomeComponent} from './student/student-home/student-home.component';
import {ProfessorHomeComponent} from './professor/professor-home/professor-home.component';
import {KholleurHomeComponent} from './kholleur/kholleur-home/kholleur-home.component';
import {KholleurGroupPageComponent} from './kholleur/kholleur-group-page/kholleur-group-page.component';
import {StudentDataServiceResolver} from './service/resolvers/student-data.service.resolver';
import {StudentMatierePageComponent} from './student/student-matiere-page/student-matiere-page.component';
import {ProfessorDataServiceResolver} from './service/resolvers/professor-data.service.resolver';
import {ProfessorStudentPageComponent} from './professor/professor-student-page/professor-student-page.component';

export const routesConfig: Route[] = [
  {
    path: 'student',
    resolve: {
      studentData: StudentDataServiceResolver
    },
    component: StudentHomeComponent
  },
  {
    path: 'student/:matiere',
    resolve: {
      studentData: StudentDataServiceResolver
    },
    component: StudentMatierePageComponent
  },
  {
    path: 'student/:matiere/exercices',
    component: StudentHomeComponent
  },
  {
    path: 'professor',
    resolve: {
      professorData: ProfessorDataServiceResolver
    },
    component: ProfessorHomeComponent
  },
  {
    path: 'professor/:student',
    resolve: {
      studentData: StudentDataServiceResolver
    },
    component: ProfessorStudentPageComponent
  },
  {
    path: 'kholleur',
    children: [
      /*{
        path: 'exercices'
      },*/
      {
        path: ':class',
        resolve: {
          professorData: ProfessorDataServiceResolver
        },
        component: KholleurHomeComponent
      },
      {
        path: ':class/:group',
        resolve: {
          professorData: ProfessorDataServiceResolver
        },
        component: KholleurGroupPageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'student'
  }
];
