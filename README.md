## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript based Product Service repository.

## Installation

```bash
1. Install Latest version of VSCode
2. Install node latest version v18.16.1
3. Generate access key for your account in IAM
4. VSCode terminal : AWS configure and configure default profile with access key and secret.
5. Clone git Repo
6. Install SAM: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html
7. Install Nest: npm i -g @nestjs/cli
```

## Running the app

```bash
# development
$ nest start

# Creating build
$ sam.cmd build 
OR 
$ npm run sambuild

# Deploy (update samconfig.toml file to create a different stack name for each developer)
$ sam.cmd deploy --config-env productservicestack --resolve-s3 
OR 
$ npm run samdeploy
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
