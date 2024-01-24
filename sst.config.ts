import { SSTConfig } from "sst";
import { API } from "./stacks/ApiStack";
import { AstroSite } from "sst/constructs";
import { FrontAstroSite } from "./stacks/AstroSiteStack";
import { StorageStack } from "./stacks/StorageStack";

export default {
  config(_input) {
    return {
      name: "music-sheet-tracker",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app
      .stack(API)
      .stack(StorageStack)
      .stack(FrontAstroSite);

  }
} satisfies SSTConfig;
