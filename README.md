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

## Configuration to use openssl legacy provider

There is an issue ssl on the most recent version of node.

One solution is to downgrade node version, the other is to use legacy version of the provider.

Here are the command line to make the recenter version work with react-native.

### Linux and macOS (Windows Git Bash)-

```Shell
export NODE_OPTIONS=--openssl-legacy-provider
```

###  Windows command prompt-

```Shell
set NODE_OPTIONS=--openssl-legacy-provider
```

### Windows PowerShell-

```Shell
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```
## AzDev integration

* [Expo-CLI Export web](https://docs.expo.dev/workflow/expo-cli/#exporting)

## Git tricks and tips

Detect merged branches and prune them:
```Shell
git remote prune origin
```

Delete local branch
```Shell
git branch -D branch_name_here
```


