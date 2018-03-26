// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase:{
    apiKey: 'AIzaSyCLbcnSbxFhfHh54DO3L3gb1bYqEU7E-n0',
    authDomain: 'easychat-3d37c.firebaseapp.com',
    databaseURL: 'https://easychat-3d37c.firebaseio.com',
    projectId: 'easychat-3d37c',
    storageBucket: 'easychat-3d37c.appspot.com',
    messagingSenderId: '229465337538'
  }
};
