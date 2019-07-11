/**
 * @format
 */

import {AppRegistry} from 'react-native';
import welcome_page from './src/welcome/welcome_page';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => welcome_page);
