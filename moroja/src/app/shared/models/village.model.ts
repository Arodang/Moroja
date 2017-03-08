import {Resource} from './resource.model';
import {ConstantsService} from "../services/constants.service";
import {ResourceSchema} from "./resourceSchema.model";

export class Village {
  private _resources: Resource[];
  private _description: string;

  constructor(private constantsService: ConstantsService) {
    this._resources = constantsService.getBaseResources();
    this._description = constantsService.getVillageDescription();

  }


  get resources(): Resource[] {
    return this._resources;
  }

  get description(): string {
    return this._description;
  }

  public getResource(resourceKey: string): Resource {
    return this.resources.find(res => res.key === resourceKey);
  }

  public gatherResource(resourceKey: string) {
    let currentResource: ResourceSchema = this.constantsService.getResourceSchemas().find(schema => schema.key === resourceKey);

    let sufficientResources: boolean = true;

    for (var i in currentResource.decreaseAmounts) {
      let resKey = currentResource.decreaseAmounts[i][0];
      let decreaseAmount = currentResource.decreaseAmounts[i][1];
      let result = this.resources.find(res => res.key === resKey).amount - decreaseAmount;
      if (result < 0) {
        sufficientResources = false;
        break;
      }
    }

    if (sufficientResources) {
      for (var i in currentResource.decreaseAmounts) {
        let resKey = currentResource.decreaseAmounts[i][0];
        let decreaseAmount = currentResource.decreaseAmounts[i][1];
        this.resources.find(res => res.key === resKey).amount -= decreaseAmount;
        if (this.resources[i].amount < 0) {
          sufficientResources = false;
          break;
        }
      }


      for (var i in currentResource.increaseAmounts) {
        let resKey = currentResource.increaseAmounts[i][0];
        let increaseAmount = currentResource.increaseAmounts[i][1];
        this.resources.find(res => res.key === resKey).amount += increaseAmount;
      }
    }
  }

}
