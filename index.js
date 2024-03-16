import {AppRegistry} from 'react-native';
import Router from './src/Route';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);