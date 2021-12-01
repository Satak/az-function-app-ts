# Application for Azure Function

Demo Application

## Prerequisites
- [Node JS](https://nodejs.org/en/)
- [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash%2Ckeda#install-the-azure-functions-core-tools)

## How to

If you want to make a similar app, then follow all the steps, but if you clone this repo and just want to run and deploy follow steps starting from `3`:

1. **Initialize Function App**

First Create function app folder, cd into it and initialize function app project
```
func init --typescript
```

1. **Create a `hello-world` function**
```
func new --name hello-world --template "HTTP trigger" --authlevel "anonymous"
```

3. **Install node modules and start the dev server**
```
npm install
npm start
```

4. **Test the dev server**
```
curl http://localhost:7071/api/hello-world?name=Terraform
```

5. **Publish**
   
To publish your local code to a function app in Azure, use the publish command:
```
func azure functionapp publish <FunctionAppName>
```
