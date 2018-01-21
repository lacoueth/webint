import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class KholleurDataServiceResolver implements Resolve<any> {

  studentProfile = {
    firstName: 'Minila',
    lastName: 'Abdkoddous',
    profilePicUrl: 'https://vice-images.vice.com/images/content-images/2016/07/26/ce-que-votre-photo-de-profil-facebook-dit-de-vous-body-image-1469553008.jpg?output-quality=75',
  };

  studentMarks = [
    {
      matiere: 'Mathématiques',
      marks: [
        {
          date: '13/12/18',
          kholleur: 'M.DUBOIS',
          mark: 14
        },
        {
          date: '4/11/18',
          kholleur: 'Mme.Lacos',
          mark: 9
        },
        {
          date: '23/09/18',
          kholleur: 'M.FOUFASSE',
          mark: 17
        }
      ]
    },
    {
      matiere: 'Physique',
      marks: [
        {
          date: '13/12/18',
          kholleur: 'M.DUBOIS',
          mark: 18
        },
        {
          date: '4/11/18',
          kholleur: 'Mme.Lacos',
          mark: 20
        },
        {
          date: '23/09/18',
          kholleur: 'M.FOUFASSE',
          mark: 15
        }
      ]
    },
    {
      matiere: 'Chimie',
      marks: [
        {
          date: '13/12/18',
          kholleur: 'M.DUBOIS',
          mark: 3
        },
        {
          date: '4/11/18',
          kholleur: 'Mme.Lacos',
          mark: 9
        },
        {
          date: '23/09/18',
          kholleur: 'M.FOUFASSE',
          mark: 11
        }
      ]
    },
    {
      matiere: 'Anglais',
      marks: [
        {
          date: '13/12/18',
          kholleur: 'M.DUBOIS',
          mark: 7
        },
        {
          date: '4/11/18',
          kholleur: 'Mme.Lacos',
          mark: 9
        },
        {
          date: '23/09/18',
          kholleur: 'M.FOUFASSE',
          mark: 9
        }
      ]
    }
  ];

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return {profile: this.studentProfile, marks: this.studentMarks};
  }
}
