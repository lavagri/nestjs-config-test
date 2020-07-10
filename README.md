## Description

Forked [Nest-starter](https://github.com/nestjs/typescript-starter) and config package usage add to demonstrate ts build performance issue.

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## Details
Run app and see how much time take to build project and start project with `config` package.
Simple start takes 5sec to build(16 RAM, intel i5 6th gen).

In middle size monolithic project it could be > 60sec, depends on frequency of using `config` package.

Checkout to `test/no-config` - to see normal time to build.

Tested on mac, windows, linux different configuration - same issue, only ram size matter(16 obviously faster the 8Gb).
