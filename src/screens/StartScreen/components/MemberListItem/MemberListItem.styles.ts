import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Style {
	container: ViewStyle;
	valueContainer: ViewStyle;
	leftSectionContainer: ViewStyle;
	rightSectionContainer: ViewStyle;
	genderImage: ImageStyle;
	title: TextStyle;
	value: TextStyle;
	nameValue: TextStyle;
	rightText: TextStyle;
	favIcon: ViewStyle;
}

export const Styles: Style = StyleSheet.create({
	container: {
		height: 100,
		borderRadius: 20,
		padding: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		marginHorizontal: 20,
		shadowRadius: 3.84,
		elevation: 5,
		backgroundColor: 'white',
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginVertical: 10,
	},
	leftSectionContainer: {
		flexDirection: 'row',
	},
	rightSectionContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rightText: {
		textAlign: 'right',
	},
	valueContainer: {
		justifyContent: 'space-between',
		height: '100%',
	},
	genderImage: {
		width: 40,
		height: 40,
		marginRight: 10,
		alignSelf: 'center',
	},
	title: {
		fontSize: 12,
	},
	value: {
		fontSize: 14,
		fontWeight: '600',
		width: 100,
	},
	nameValue: {
		width: 100,
	},
	favIcon: {
		marginLeft: 10,
	},
});
