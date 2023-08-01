# fuel-assistant-mobile

- [Visit application](https://macreibendev-fuel-assistant-front.azurewebsites.net/)

## Redux integration documentation

- [How to implement Redux in React Native apps](https://enappd.com/blog/redux-in-react-native-app/92/)
- [Introduction to Using Redux in a React Native App](https://www.digitalocean.com/community/tutorials/react-react-native-redux)

### Redux integration official documentation

- [Official react-redux connect](https://react-redux.js.org/api/connect)

## Pre requisite

- VSCode
- Go to src
- Download dependencies

```
npm install
```

- Run application in web mode

```
npm run web
```

## Testing component with redux

- https://callstack.github.io/react-native-testing-library/docs/redux-integration
- https://github.com/callstack/react-native-testing-library/tree/main/examples/redux

## Documenting

- [https://jsdoc.app/tags-param.html](https://jsdoc.app/tags-param.html)

## Configuration to use openssl legacy provider

There is an issue ssl on the most recent version of node.

One solution is to downgrade node version, the other is to use legacy version of the provider.

Here are the command line to make the recenter version work with react-native.

### Linux and macOS (Windows Git Bash)-

```Shell
export NODE_OPTIONS=--openssl-legacy-provider
```

### Windows command prompt-

```Shell
set NODE_OPTIONS=--openssl-legacy-provider
```

### Windows PowerShell-

```Shell
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

## AzDev integration

- [Expo-CLI Export web](https://docs.expo.dev/workflow/expo-cli/#exporting)

## Git tricks and tips

### Detect remote deleted branches and prune them:

```Shell
git remote prune origin
```

```Shell
git fetch --prune origin
```

### Delete local branch

```Shell
git branch -D branch_name_here
```

### See local branches as graph

```Shell
git log --graph --pretty=oneline --abbrev-commit
```
