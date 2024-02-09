import { NavigationContainer } from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from '../screens';
import { navigationRef } from './navigationUtilities';

export type AppStackParamList = {
	Start: undefined;
	DetailedMember: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
	NativeStackScreenProps<AppStackParamList, T>;

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = function AppStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Start"
				component={Screens.StartScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="DetailedMember"
				component={Screens.DetailedMemberScreen}
				options={{
					title: 'Details',
				}}
			/>
		</Stack.Navigator>
	);
};

export interface NavigationProps
	extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = function AppNavigator(props: NavigationProps) {
	return (
		<NavigationContainer ref={navigationRef} {...props}>
			<AppStack />
		</NavigationContainer>
	);
};
