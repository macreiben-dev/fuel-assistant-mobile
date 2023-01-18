# fuel-assistant-mobile

## Redux integration documentation

- [How to implement Redux in React Native apps](https://enappd.com/blog/redux-in-react-native-app/92/)
- [Introduction to Using Redux in a React Native App](https://www.digitalocean.com/community/tutorials/react-react-native-redux)

## Pre requisite

- Install Android Studio
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
