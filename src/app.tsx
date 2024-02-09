import React from 'react';
import {
	initialWindowMetrics,
	SafeAreaProvider,
} from 'react-native-safe-area-context';
import { AppNavigator } from './navigators';

function App(): React.JSX.Element {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<AppNavigator />
		</SafeAreaProvider>
	);
}

export default App;
