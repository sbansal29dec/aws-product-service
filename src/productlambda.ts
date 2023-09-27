import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import * as awsServerlessExpress from 'aws-serverless-express';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

const server = express();

async function bootstrap() {
  // ... Your NestJS setup code

  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  await app.init();

  return awsServerlessExpress.createServer(server, undefined);
}

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
  const server = await bootstrap();
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
