import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-kholleur-home',
  templateUrl: './kholleur-home.component.html',
  styleUrls: ['./kholleur-home.component.css']
})
export class KholleurHomeComponent implements OnInit {

  profile: any;
  groups: any;
  groupstopass=[]

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.data.subscribe(res => {
      console.log(res['professorData']);
      this.profile = res['professorData']['profile'];
      this.groups = res['professorData']['groups'];
      for (const x of this.groups) {
        this.groupstopass.push({name : x.groupName, route: '/kholleur/1/'+x.groupName})
      }

    })
  }

}
