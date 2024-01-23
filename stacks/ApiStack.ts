import { StackContext, Api, EventBus } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "music-sheet-api", {

    routes: {
      "GET /": "packages/functions/src/musicSheet/get.handler"
    }

  })

  stack.addOutputs({
    ApiEndpoint: api.url
  })

  return {
    api
  }
}
