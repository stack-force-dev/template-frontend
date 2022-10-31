## webpack-react-typescript

Tic Tac Toe - Frontend App

###

<img src="https://i.morioh.com/bffbbd66ea.png" alt="webpack-react-typescript" />

###

## Quick Start

**Start the development**

- `git clone https://github.com/developers-gang/tic-tac-toe-frontend`
- `yarn install` or `npm install`
- `yarn start` or `npm start`
- open [localhost:3000](http://localhost:3000) in your favorite browser

**Build project**

- `yarn build` or `npm run build`

**Lint project**

- `yarn lint` or `npm run lint`

**Fix autofixable eslint errors**

- `yarn lint:fix` or `npm run lint:fix`

If `husky` pre-commit hook willn't work, please run `npx husky-init` command with cli (in project directory)<br /> and replace new `.husky/pre-commit` file with our. <br />Also I created `release.yml` file in `.github/workflows/`. This is for automation our releases with github bot,<br />so you need to add your script after `yarn build` command.

## Used technologies

- [React 17](https://reactjs.org/blog/2020/10/20/react-v17.html) as a front-end library.
- [Webpack 5](https://webpack.js.org/) as a bundler.
- [TypeScript](https://www.typescriptlang.org/) for type checking.
- [React Router v6](https://v5.reactrouter.com/web/guides/quick-start) for application routing.
- [i18next](https://www.i18next.com/) for localzation.
- [eslint](https://eslint.org/) for lint code.
- [prettier](https://prettier.io/) for format code.
- [husky](https://typicode.github.io/husky/#/) for run any script before commit.
- [commitlint](https://commitlint.js.org/#/) for conventional commit messages.

## Commit Rules

We are use commitlint for lint our commit messages and it has several rules for commits. <br />

