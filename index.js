// Initialize Reanimated before Uniwind's TextInput imports its animated wrapper.
import 'react-native-reanimated';

import { registerRootComponent } from 'expo';

import App from './App';

registerRootComponent(App);
