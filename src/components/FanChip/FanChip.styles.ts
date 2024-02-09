import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Style {
	container: ViewStyle;
	valueContainer: ViewStyle;
	value: TextStyle;
	title: TextStyle;
}

export const Styles: Style = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		alignItems: 'center',
		borderRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 10,
		width: 130,
		marginTop: 10,
		justifyContent: 'center',
		marginHorizontal: 10,
	},
	valueContainer: {
		flexDirection: 'row',
		marginBottom: 3,
		alignItems: 'center',
	},
	value: {
		fontSize: 24,
	},
	title: {
		fontWeight: '600',
	},
});
