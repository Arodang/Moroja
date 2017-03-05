import {Component, OnInit} from '@angular/core';
import {VillageService} from "./village.service";

@Component({
  moduleId: module.id,
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css'],
  providers: []
})
export class VillageComponent implements OnInit {
  village = {
    resources: []
  };
  resources = [];

  //constructor is used to initialize local variables and such
  //called first time before the ngOnInit()
  constructor(villageService: VillageService) {
    this.village = villageService.getVillage();
    this.resources = villageService.getResources();
  }

  //ngOnInit is used to do any kind of initialization work besides setting local vars
  //called after the constructor and called after the first ngOnChanges()
  //see http://stackoverflow.com/a/35763811 for more
  ngOnInit() {

  }

  gatherResource(resourceKey: string) {
    this.village.resources.find(res => res.key === resourceKey).amount
      += this.resources.find(res => res.key === resourceKey).amount;
  }

}
