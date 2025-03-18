<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A NestJS + Amazon SQS sample application.</p>
</p>

## Project setup

```bash
$ npm install

$ npm run start

# Check if the application is running
$ localhost:2000/messages
```

## Configure AWS variables

Run `cp .env.example .env` and fill in the fields in the newly created  `.env` file.

## Produce and consume messages

```bash
$ localhost:2000/messages/send
```