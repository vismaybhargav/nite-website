# To Contribute

**Not going to go over having your dev env set up because everyone
does it diff, just use whatever and don't commit your local editor config files (i.e. `.vscode/`, `.idea`, `.emacs`)**

# Pushing to the branch

> [!IMPORTANT]
> Please never push to the main branch directly, rather create a dev branch for whatever feature you're working on and make a pull request.

# Code Style

1. Always format with **Prettier** as this project is prettier enabled, if you don't have the plugin you can install it through vscode/nvim

2. Follow good coding practices, have readable variable names, follow the code organizing that is already present in the file system, and ***MAKE SURE EVERYTHING HAS A TYPE***

Ex: 
```tsx
type ButtonProps = {
  rounded: boolean;
  filled: boolean;
  color: Color;
  text: string;
};

const Button = ({ rounded, filled, color, text }: ButtonProps) => {}
```

or 
```tsx
let i: number = 0;
```
