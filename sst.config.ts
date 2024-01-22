import { SSTConfig } from "sst";
import { API } from "./stacks/ApiStack";
import { AstroSite } from "sst/constructs";
import { FrontAstroSite } from "./stacks/AstroSiteStack";

export default {
  config(_input) {
    return {
      name: "music-sheet-tracker",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API).stack(FrontAstroSite);

  }
} satisfies SSTConfig;
