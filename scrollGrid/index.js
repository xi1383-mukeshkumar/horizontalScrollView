import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import routes from './src/container/routes/routes';

AppRegistry.registerComponent(appName, () => routes);
