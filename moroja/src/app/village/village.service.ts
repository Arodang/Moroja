import {Injectable} from '@angular/core';
import {Village} from "../shared/models/village.model";
import {ConstantsService} from "../shared/services/constants.service";
import {ResourceSchema} from "../shared/models/resourceSchema.model";
import {Resource} from "../shared/models/resource.model";

@Injectable()
export class VillageService {
  private _village: Village;
  private _resourceSchemas: ResourceSchema[];

  constructor(private constantsService: ConstantsService) {
    //Should fetch village from storage
    //if village doesn't exist, then create a new one
    if (!this._village) {
      this._village = new Village(constantsService);
    }

    this._resourceSchemas = constantsService.getResourceSchemas();
  }


  get village(): Village {
    return this._village;
  }

  get resourceSchemas(): ResourceSchema[] {
    return this._resourceSchemas;
  }

  public gatherResources(resourceKey: string) {
    this._village.gatherResource(resourceKey);
  }

}
