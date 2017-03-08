import {Injectable} from '@angular/core';
import {ResourceSchema} from "../models/resourceSchema.model";
import {Resource} from "../models/resource.model";

@Injectable()
export class ConstantsService {

  constructor() {
  }

  public getResourceSchemas(): ResourceSchema[] {
    let resourceSchemas = [
      new ResourceSchema(
        "Lumber",
        10,
        [
          ["lumber", 3]
        ],
        [],
        2,
        "lumber",
        "Spend a few hours cutting down lumber for use in the village"
      ),
      new ResourceSchema(
        "Firewood",
        10,
        [
          ["firewood", 5]
        ],
        [
          ["lumber", 1]
        ],
        2,
        "firewood",
        "Split a piece of lumber into firewood to keep your cabin warm"
      ),

      new ResourceSchema(
        "Food",
        10,
        [
          ["food", 3]
        ],
        [],
        2,
        "food",
        "Harvest some of the bountiful berries and nuts from the surrounding forest for dinner tonight"
      ),
      new ResourceSchema(
        "Water",
        10,
        [
          ["water", 5]
        ],
        [],
        2,
        "water",
        "Fetch a bucket of water, then boil it to ensure it is safe to drink"
      ),
      new ResourceSchema(
        "Stone",
        10,
        [
          ["stone", 5]
        ],
        [],
        2,
        "stone",
        "Gather rock chipped from the island's cliffs to help with construction efforts"
      )
    ];

    return resourceSchemas;
  }

  public getBaseResources(): Resource[] {
    let resources : Resource[] = [];

    let schemas = this.getResourceSchemas();

    for(var i in schemas) {
      let schema = schemas[i];
      resources.push(new Resource(schema.baseAmount, schema.gatherDescription, schema.name, schema.key));
    }

    return resources;
  }

  public getVillageDescription(): string {
    return "Your village is tiny, with only a few inhabitants. Smoke curls from your " +
    "cabin's chimney, but the cold wind warns you to gather more firewood before night hits."
  }
}
