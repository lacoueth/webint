import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class ProfessorDataServiceResolver implements Resolve<any> {

  url = 'https://vice-images.vice.com/images/content-images/2016/07/26/ce-que-votre-photo-de-profil-facebook-dit-de-vous-body-image-1469553008.jpg?output-quality=75';

  professorProfile = {
    firstName: 'Jean-Pierre',
    lastName: 'Fouco',
    profilePicUrl: 'https://vice-images.vice.com/images/content-images/2016/07/26/ce-que-votre-photo-de-profil-facebook-dit-de-vous-body-image-1469553008.jpg?output-quality=75',
  };

  studentGroups = [
    {
      groupName: 'Groupe 1',
      students: [
        {
          firstName: 'Minila',
          lastName: 'Sahli',
          average: 4,
          picUrl: 'https://media-exp2.licdn.com/media-proxy/ext?w=800&h=800&hash=AKwbqmOwWjKc2sdK3EgfdNckNuk%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oISJLOTW3hGTrbi6zxDzCdDrauCMPQxSxnCV1w4XVDII_ZMUGQaOTFLvebB4Eb0eW8WPSNMikhRAgYoWIcwdhqMDQulI6KMd6kTiN82cJSRySTF4jxXVVxADUw'
        },
        {
          firstName: 'Mastafa',
          lastName: 'Foufa',
          average: 9,
          picUrl: 'http://leonard-photographe.fr/wp-content/uploads/2016/11/Profil-Jordan-003.jpg'
        },
        {
          firstName: 'Abdkouddous',
          lastName: 'Ben Ben',
          average: 19,
          picUrl: 'http://iv1.lisimg.com/image/4321715/500full-zayn-malik.jpg'
        }
      ]
    },
    {
      groupName: 'Groupe 2',
      students: [
        {
          firstName: 'Antoine',
          lastName: 'Hervet',
          average: 12,
          picUrl: 'https://s2.favim.com/mini/34/beautiful-bieber-bieber-fever-boy-boys-270673.jpg'
        },
        {
          firstName: 'Quentin',
          lastName: 'Dubourg',
          average: 12,
          picUrl: 'https://d34jodf30bmh8b.cloudfront.net/pictures/5661/5804/profile-1474295964-7c5694e2fc409f9ba430e094fee7f906.jpg'
        },
        {
          firstName: 'Hugo',
          lastName: 'Ribiere',
          average: 9,
          picUrl: 'https://media.fan2.fr/article-3434179-ajust_1020/la-photo-de-profil-de-selena.jpg'
        }
      ]
    },
    {
      groupName: 'Groupe 3',
      students: [
        {
          firstName: 'Emilie',
          lastName: 'Lamichto',
          average: 5,
          picUrl: 'http://static1.purebreak.com/articles/0/10/12/50/@/449406-votre-photo-de-profil-devoilerait-votre-diapo-1.jpg'
        },
        {
          firstName: 'Van',
          lastName: 'Chen',
          average: 10,
          picUrl: 'https://data.whicdn.com/images/152944923/superthumb.jpg'
        },
        {
          firstName: 'Penelope',
          lastName: 'Cruz',
          average: 18,
          picUrl: 'https://0d4g9qvxfl-flywheel.netdna-ssl.com/wp-content/uploads/2017/11/Corp.jpg'
        }
      ]
    }
  ];

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return {profile: this.professorProfile, groups: this.studentGroups};
  }
}
