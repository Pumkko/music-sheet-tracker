import { ApiHandler } from "sst/node/api";

const HelloWorld = {
    helloWorld: "Hello World !!"
}

export const handler = ApiHandler(async (evt) => {
    return {
        statusCode: 200,
        body: JSON.stringify(HelloWorld)
    }
})