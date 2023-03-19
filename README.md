# Basic Calculator App

Simple and basic calculator implemented using Vue 3 + Typescript and Pinia.
It has been used [create-vue](https://github.com/vuejs/create-vue) to scaffold Vite-based projects.
It has been added Typescript, Pinia for the state management, ESLint and Prettier.

At last, it has been used Sass and BEM methodology for the Vue components.

## Usage

The operators allowed are '+', '-', '*' and '/'.
It allows making decimals operations as well.
Enter one number, set an operator, enter another number, and press "=" to get the result of the operation.

Keep in mind that JS like other programming languages (Python, Java, etc) has common floating-point issues.
The floating point is based on the IEEE 754 standard, which means the numbers are represented as number times a power of two, so rational numbers like 1/10 or 1/3 cannot be represented exactly as a power of two.

Some examples are:

```sh
// JavaScript:

0.1 + 0.2 = 0.30000000000000004
0.8 - 0.1 = 0.7000000000000001
5.11 * 100 = 511.00000000000006
1.4 / 10 = 0.13999999999999999
```

```sh
# Python:

0.1 + 0.2 = 0.30000000000000004
0.8 - 0.1 = 0.7000000000000001
5.11 * 100 = 511.00000000000006
1.4 / 10 = 0.13999999999999999
```

As we can see, we get the same results for both languages.

In order to avoid these common floating point issues, we should work with some library that takes care of decimal precision.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
