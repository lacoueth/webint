import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-kholleur-group-page',
  templateUrl: './kholleur-group-page.component.html',
  styleUrls: ['./kholleur-group-page.component.css']
})
export class KholleurGroupPageComponent implements OnInit {


  profile: any;
  group: any;
  groupstopass = [];

  constructor(private _route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    this.groupstopass = [];
    this._route.data.subscribe(res => {
      console.log(res['professorData']);
      this.profile = res['professorData']['profile'];
      this.group = res['professorData']['groups'][0];
      var groups = res['professorData']['groups'];
      this.groupstopass = [];

      for (const x of groups) {
        this.groupstopass.push({name : x.groupName, route: '/kholleur/1/' + x.groupName})
      }

    })

    window.scroll(0,0);
  }

  navigateBack() {
    this._location.back();
  }
}
