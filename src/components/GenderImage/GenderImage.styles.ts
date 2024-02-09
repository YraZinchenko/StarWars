import { StyleSheet, ImageStyle } from 'react-native';

interface Style {
	bg: ImageStyle;
	md: ImageStyle;
	sm: ImageStyle;
}

export const Styles: Style = StyleSheet.create({
	bg: {
		width: 100,
		height: 100,
		alignSelf: 'center',
		marginVertical: 10,
	},
	md: {
		width: 40,
		height: 40,
		marginRight: 10,
		alignSelf: 'center',
	},
	sm: {
		width: 30,
		height: 30,
		marginRight: 5,
		alignSelf: 'center',
	},
});
