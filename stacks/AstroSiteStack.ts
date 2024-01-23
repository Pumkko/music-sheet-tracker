import { AstroSite, StackContext, use } from "sst/constructs";
import { API } from "./ApiStack";

export function FrontAstroSite({ stack }: StackContext) {

    const { api } = use(API);

    const site = new AstroSite(stack, "site", {
        path: "packages/tracker-front",
        buildCommand: "pnpm run build",
        environment: {
            VITE_API_URL: api.url
        }
    });
    stack.addOutputs({
        url: site.url,
    });

    return {
        site
    }
}