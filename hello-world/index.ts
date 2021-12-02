import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const message = name
        ? `Hello, [${name}] from Azure Function`
        : "Hello from Azure Function. You can pass name query string to the get or post request";

    const status = name === 'error' ? 500 : 200
    const body = JSON.stringify({ message, version: "1.1" })
    const headers = { "Content-Type": "application/json" }

    context.res = {
        status,
        headers,
        body
    };

};

export default httpTrigger;
