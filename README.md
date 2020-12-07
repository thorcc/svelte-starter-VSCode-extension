# Svelte-starter

Extension for running svelte from the explorer menu.

<p>
  <img src="https://raw.githubusercontent.com/thorcc/svelte-starter-VSCode-extension/main/image.png" alt="logo" width="300">
</p>

## Requirements

- [Node.js](https://nodejs.org/en/)
- Git
  - [Git (mac)](https://sourceforge.net/projects/git-osx-installer/)
  - [Git (windows)](https://git-scm.com/download/windows)

> Restart VS Code after installing node and git.

## create svelte
```
npx degit sveltejs/template .
npm install
npm run dev
```

## run svelte
```
npm run dev
```

## build svelte

```
npm build
```

This function also adds a `./` to paths in index.html, enabling the app to run directly from `index.html` with out a webserver.
