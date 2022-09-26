# Next.js Typescript Template

This project is a very opinionated starter template. This is a [Next.js](https://nextjs.org/) project. It is developed using Typescript.

Dependencies are managed with Yarn.

## Getting Started

Install all dependencies using yarn.
```bash
yarn
```

Initialise husky.
```bash
yarn prepare
```

Environment variables are saved in *.env* and *.env.test*. Copy environment variables and customise for your local environment.
```bash
cp .env .env.local
cp .env.test .env.test.local
```

To run the development server on the default port (3000):
```bash
yarn dev
```

To run the development server on a custom port:
```
yarn dev -p PORT
```

## Commands
This project supports the following commands to help with development and testing.

- To build the project use the following:

  ```bash
  yarn build
  ```
- To start the server in production mode after a build:
  ```bash
  yarn start
  ```

- To lint the project use the following:
  ```
  yarn lint

  # Just JS
  yarn lint:js

  # Just styles
  yarn lint:styles
  ```

## Testing
Cypress will need to know where your development server is located. *HOST* and *PORT* must be set in *.env.local*.

## Learn More

This project uses numerous libraries. To find out more about them see the information provided below.

- ### Next.js

  To learn more about Next.js, take a look at the following resources:

  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

  You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).

- ### Husky

  Husky is used to manage git hooks. To find out more visit [here](https://typicode.github.io/husky).

- ### MUI
  [MUI](https://mui.com/) is the default component library utilised.

- ### Framer Motion
  [Framer Motion](https://www.framer.com/motion/) is used to animate items.

- ### Commits
  All commits are kept constant using [commitlint](https://commitlint.js.org/).

- ### Testing
  Integration testing is managed via [Cypress](https://www.cypress.io).

- ### Hooks
  [@react-hookz/web](https://react-hookz.github.io/web) is used to supplement React's hooks feature.

- ### Formatting
  [Prettier](https://prettier.io) is used to format source code files.
