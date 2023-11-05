![gitline example](./.github/img/gitline-example.png)

# gitline - A git history to HTML renderer implemented in TypeScript

<img align="right" width="200px" src="https://github.com/piotrpdev/gitline/assets/99439005/ce6723a1-d9fc-47a7-aa06-84552df2669f" />

> [!NOTE]
> This is a fork of the original project by [blecher-at](https://github.com/blecher-at/gitline). This fork updates the project to a more modern approach and removes a lot of libraries that are no longer needed.

The idea is to have this on a central server or your local machine, to keep tabs on what your team is doing :)
Needs a JSON file as input (generated with [git2json](https://github.com/blecher-at/git2json))

gitline tries to be aware of your branching scheme. It will autodetect the category and assignment of branches and groups commits accordingly.

## Installation / Setup of development environment

- Install Node.js
- Install dependencies: `npm install`
- Build the library: `npm run build`
- View the examples: `npm run dev:demo`
- Test the library: `npm run test`

## Creating sample data

- Install [git2json](https://github.com/blecher-at/git2json)
- run `git json > myfile.json` - in a cronjob/github workflow presumably
- point `src/demo/index.html` to the newly created JSON file

## Imports / Third party

- Programming language: [TypeScript](http://www.typescriptlang.org/)
- SVG Rendering: [JSGL](https://github.com/jsgl/repo)  
  - Uses [jQuery](https://jquery.org/)
- Hash Generation: [Crypto JS](https://github.com/brix/crypto-js)

## Legal / License

Licensed under the [Affero GPLv3](LICENSE), which basically says: You are free to hack and use,
but if you want to build a product out of it, or host it as a service, we need to talk.
