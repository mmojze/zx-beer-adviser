# ZX Ventures - Back-end Challenge

# About

This code solves the [backend challenge](https://github.com/ZXVentures/ar-sec-coding-challenge/blob/main/back-end.md) provided by ZX Ventures within a single serverless function that is going to be deployed to AWS Lambda. 

We're using [Serverless framework](https://github.com/serverless/serverless) to make the deploy a lot more simple and automatic, It also adds the possibility to deploy the solution to another cloud provider by only changing the variables in the yaml configuration file.

For local testing, we use [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai). 

# URL 

You can hit this function in the following URL:

```  https://1p5reazax0.execute-api.us-east-1.amazonaws.com/v1/findTwoBeers ``` 

## Request example

``` HTTP method: POST ```

```
body: { 
    beers: [10, 20, 30, 50],
    target: 60
}

```
## Response example

```
body: { 
    index: [0, 3]
}
```

# Commands

* ```npm run test ``` - to run the unit testing.
* ```npm run deploy ``` - to deploy the api, remember to install Serverless CLI first with ``` npm install -g serverless ``` and to setup your AWS credentials.











