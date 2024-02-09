import { StyleSheet, TextStyle } from 'react-native';

interface Style {
	btnText: TextStyle;
}

export const Styles: Style = StyleSheet.create({
	btnText: {
		paddingHorizontal: 15,
		paddingVertical: 5,
		color: '#f6554f',
		borderWidth: 1,
		borderColor: '#f6554f',
		borderRadius: 5,
		fontSize: 14,
	},
});
