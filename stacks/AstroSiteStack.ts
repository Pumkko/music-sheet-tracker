import { AstroSite, StackContext } from "sst/constructs";

export function FrontAstroSite({ stack }: StackContext) {
    const site = new AstroSite(stack, "site", {
        path: "packages/tracker-front"
    });
    stack.addOutputs({
        url: site.url,
    });

    return {
        site
    }
}