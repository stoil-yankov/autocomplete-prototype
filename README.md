## Table of contents
- [Table of contents](#table-of-contents)
- [About the Template](#about-the-template)
  - [Built with?](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Roadmap](#roadmap)
- [Description?](#description)
  - [ESLint](#eslint)
    - [What is ESLint?](#what-is-eslint)
    - [Configuration](#configuration)
    - [Rules](#rules)
  - [Prettier](#prettier)
    - [What is Prettier?](#what-is-prettier)
    - [Configuration](#configuration-1)

## About the Template
This template serves as the basis of each new project. Every time when you use this template in your new project you are saving a couple of hours to configure the most commonly used packages.
### Built with?
* [Node.js](https://nodejs.org/en/about/)
* [Typescript](https://www.typescriptlang.org/)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Jest](https://jestjs.io/)

## Getting Started
This is an example of what you need to do in order to use this template in your newly created project.
### Installation
Copy the contents of this repository into your new project folder....TODO
## Roadmap
- [x] ESLint
- [ ] Typescript config
- [x] Prettier
- [ ] Jest
  
## Description?

### ESLint 
#### What is ESLint?
ESLint is an open-source Javascript linting utility package providing us the ability to apply a codestyle in our project.

#### Configuration
The properties of the object are the options of the configuration. Here is what each of them mean:
- **env** - in what environment the project will be used. More about the env option you can read [here](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments).
- **plugins** - Here we define the plugins that ESLint will use. They vary depending on the packages or rules we want to use. More about the plugins option you can read [here](https://eslint.org/docs/user-guide/configuring/plugins).
- **parser** - Most of the plugins use their own parser. In our case we are using the typescript parser.
- **extends** - This option allows us to inherit all the traits of other configuration files and modify options. More about the extends option you can read [here](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files).
- **rules** - Here we are defining rules that will impose a certain codestyle. Here is every rule with description:

#### Rules
This rules apply strict code style in order to make the code more clean and easy to read.

| Rule  | Description |
|---|---|
| 'import/prefer-default-export': 'off'  | Disable ESLint to show a warning when we try not do a default import.  |
| 'import/no-default-export': 'error' | Throw error when you try to do a default export. Here is why we don't want to use default export: [link](https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad) |
| 'no-use-before-define'  | throw an error when you try to use a variable, function or class before it is defined. It is never a good practice to use something before it is defined. |
| 'prefer-destructuring': 'error'  | This rule enforces usage of destructuring instead of accessing a property through a member expression. ([link](https://eslint.org/docs/rules/prefer-destructuring))  |
| @typescript-eslint/array-type  | Requires using either T[] or Array<T> for arrays.([link](https://typescript-eslint.io/rules/array-type/))  |
| @typescript-eslint/await-thenable  | Disallows awaiting a value that is not a Thenable.([link](https://typescript-eslint.io/rules/await-thenable/))  |
| @typescript-eslint/no-empty-interface  | Disallow the declaration of empty interfaces. ([link](https://typescript-eslint.io/rules/no-empty-interface))  |
| @typescript-eslint/no-explicit-any  | Disallow usage of the any type.([link](https://typescript-eslint.io/rules/no-explicit-any))  |
| @typescript-eslint/no-extra-non-null-assertion  | Disallow extra non-null assertion.([link](https://typescript-eslint.io/rules/no-extra-non-null-assertion))  |
| @typescript-eslint/no-floating-promises  | Requires Promise-like values to be handled appropriately.([link](https://typescript-eslint.io/rules/no-floating-promises))  |
| @typescript-eslint/no-for-in-array  | Disallow iterating over an array with a for-in loop. ([link](https://typescript-eslint.io/rules/no-for-in-array))  |
| @typescript-eslint/no-inferrable-types  | Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.([link](https://typescript-eslint.io/rules/no-inferrable-types))  |
| @typescript-eslint/no-misused-new  | Enforce valid definition of new and constructor.([link](https://typescript-eslint.io/rules/no-misused-new))  |
| @typescript-eslint/no-misused-promises  | Avoid using promises in places not designed to handle them.([link](https://typescript-eslint.io/rules/no-misused-promises))  |
| @typescript-eslint/no-non-null-assertion | Disallows non-null assertions using the ! postfix operator.([link](https://typescript-eslint.io/rules/no-non-null-assertion)) |
| @typescript-eslint/no-require-imports | Disallows invocation of require().([link](https://typescript-eslint.io/rules/no-require-imports)) |
| @typescript-eslint/no-this-alias | Disallow aliasing this.([link](https://typescript-eslint.io/rules/no-this-alias)) |
| @typescript-eslint/no-unnecessary-condition | Prevents conditionals where the type is always truthy or always falsy.([link](https://typescript-eslint.io/rules/no-unnecessary-condition)) |
| @typescript-eslint/no-unsafe-argument | Disallows calling a function with an any type value.[link](https://typescript-eslint.io/rules/no-unsafe-argument)) |
| @typescript-eslint/no-unsafe-assignment | Disallows assigning any to variables and properties.([link](https://typescript-eslint.io/rules/no-unsafe-assignment)) |
| @typescript-eslint/no-unsafe-call | Disallows calling an any type value.([link](https://typescript-eslint.io/rules/no-unsafe-call)) |
| @typescript-eslint/no-unsafe-member-access | Disallows member access on any typed variables.([link](https://typescript-eslint.io/rules/no-unsafe-member-access)) |
| @typescript-eslint/no-unsafe-return | Disallows returning any from a function.([link](https://typescript-eslint.io/rules/no-unsafe-return)) |
| @typescript-eslint/no-var-requires | Disallows the use of require statements except in import statements.([link](https://typescript-eslint.io/rules/no-var-requires)) |
| @typescript-eslint/prefer-as-const | Prefer usage of as const over literal type.([link](https://typescript-eslint.io/rules/prefer-as-const)) |
| @typescript-eslint/prefer-enum-initializers | Prefer initializing each enums member value.([link](https://typescript-eslint.io/rules/prefer-enum-initializers)) |
| @typescript-eslint/prefer-for-of | Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.([link](https://typescript-eslint.io/rules/prefer-for-of)) |
| @typescript-eslint/prefer-readonly | Requires that private members are marked as readonly if they're never modified outside of the constructor.([link](https://typescript-eslint.io/rules/prefer-readonly)) |
| @typescript-eslint/restrict-plus-operands | When adding two variables, operands must both be of type number or of type string.([link](https://typescript-eslint.io/rules/restrict-plus-operands)) |
| @typescript-eslint/restrict-template-expressions | Enforce template literal expressions to be of string type.([link](https://typescript-eslint.io/rules/restrict-template-expressions)() |
| @typescript-eslint/brace-style | Enforce consistent brace style for blocks.([link](https://typescript-eslint.io/rules/brace-style)) |
| @typescript-eslint/no-array-constructor | Disallow generic Array constructors.([link](https://typescript-eslint.io/rules/no-array-constructor)) |
| @typescript-eslint/no-extra-semi | Disallow unnecessary semicolons.([link](https://typescript-eslint.io/rules/no-extra-semi))|
| 'prettier/prettier': 'error' | When there is prettier formatting error ESLint will throw an error |

### Prettier
#### What is Prettier?
Prettier is an opinionated code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style.

#### Configuration
Prettier configuration is located in ```.prettierrc```. Here is what each option means:

| Rule | Default | Changed to | Description |
|---|---|---|---|
| printWidth | 80 | - | Specify the line length that the printer will wrap on. ([link](https://prettier.io/docs/en/options.html#print-width)) |
| tabWidth | 2 | - | Specify the number of spaces per indentation-level. ([link](https://prettier.io/docs/en/options.html#tab-width)) |
| useTabs | false | - | Indent lines with tabs instead of spaces. ([link](https://prettier.io/docs/en/options.html#tabs)) |
| semi | true | - | Print semicolons at the ends of statements. ([link](https://prettier.io/docs/en/options.html#semicolons)) |
| singleQuote | false | true | Use single quotes instead of double quotes. ([link](https://prettier.io/docs/en/options.html#quotes)) |
| quoteProps | "as-needed" | "consistent" | Change when properties in objects are quoted. ([link](https://prettier.io/docs/en/options.html#quote-props)) |
| trailingComma | es5 | - | Print trailing commas wherever possible in multi-line comma-separated syntactic structures. ([link](https://prettier.io/docs/en/options.html#trailing-commas)) |
| bracketSpacing | true | - | Print spaces between brackets in object literals. ([link](https://prettier.io/docs/en/options.html#bracket-spacing)) |
| arrowParens | always | - | Include parentheses around a sole arrow function parameter. ([link](https://prettier.io/docs/en/options.html#arrow-function-parentheses)) |
| rangeStart | 0 | - | Starting point of the format ([link](https://prettier.io/docs/en/options.html#range)) |
| rangeEnd | Infinity | - | End point of the format ([link](https://prettier.io/docs/en/options.html#range)) |
