import {Injectable} from '@angular/core';

@Injectable()
export class VillageService {
  village = {
    resources: []
  };
  resources = [];
  MOCK_VILLAGE = {
    resources: [
      {
        name: "Lumber",
        amount: 15,
        key: "lumber"
      },
      {
        name: "Firewood",
        amount: 15,
        key: "firewood"
      },
      {
        name: "Food",
        amount: 15,
        key: "food"
      },
      {
        name: "Water",
        amount: 15,
        key: "water"
      },
      {
        name: "Stone",
        amount: 15,
        key: "stone"
      }

    ]
  };
  MOCK_RESOURCES = [
    {
      name: "Lumber",
      amount: 2,
      description: "Spend a few hours cutting down lumber for use in the village",
      key: "lumber"
    },
    {
      name: "Firewood",
      amount: 2,
      description: "Split a piece of lumber into firewood to keep your cabin warm",
      key: "firewood"
    },
    {
      name: "Food",
      amount: 2,
      description: "Harvest some of the bountiful berries and nuts from the surrounding forest for dinner",
      key: "food"
    },
    {
      name: "Water",
      amount: 2,
      description: "Fetch and boil some water ensure it is safe to drink",
      key: "water"
    },
    {
      name: "Stone",
      amount: 2,
      description: "Gather rock chipped from the island's cliffs",
      key: "stone"
    }
  ];


  constructor() {
    this.village = this.MOCK_VILLAGE;
    this.resources = this.MOCK_RESOURCES;
  }

  public getVillage() {
    return this.village;
  }

  getResources() {
    return this.resources;
  }

}
