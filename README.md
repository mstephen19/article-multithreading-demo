# How to: Multithreading in Node.js (Demo code)

This repository contains all code examples used in [this Medium article](https://medium.com/@matthiasvstephens/how-to-multithreading-in-node-js-9b8093ca4edc).

After playing around with the examples, dive into [Nanolith](https://www.npmjs.com/package/nanolith)'s short documentation and start using it in your own project!

## Requirements

To run all three projects, you'll need:

1. [Node.js](https://nodejs.org/en/download/)
2. [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
    - Install with `npm install -g yarn` if you already have Node.js installed.
3. [Golang](https://go.dev/doc/install)

## Setup

No setup is required for the **golang** folder.

Within both the **node-vanilla** and **node-nanolith** folders, run the following command to install all dependencies:

```shell
yarn install
```

## Running

To run the file in the **golang** folder, use this command:

```shell
go run main.go
```

For both **node-vanilla** and **node-nanolith**, the commands are the same. To run the project, use this command:

```shell
yarn start
```

And to run the blocking test, use this command:

```shell
yarn test-blocking
```
