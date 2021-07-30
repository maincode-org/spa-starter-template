# spa-starter-template
Get moving fast, with this React Single Demo Application quickstarter template.

To get started, simple `cd` into the `ionic-app` folder, and run:

```shell
> npm install

> npm run prepare

> ionic serve
```

## Folder structure
We have three main folders in src:
- components
- screens
- styles

In components we have React functional components. <br/>
In screens we have screens or what atomic design would call [pages](https://bradfrost.com/blog/post/atomic-web-design/). Screens will almost always consist mostly of components. <br/>
In styles we have a global stylesheet, ionic theming and potentially other stylesheets.

## Removal of Material UI
If you know you are not going to use Material UI and wish to remove the dependency - this is how.
1. Remove the <ThemeProvider> wrapper component, alongside the import statement in App.tsx.
2. Remove the theme import and the mui-theme.ts file in the root of the src folder.

