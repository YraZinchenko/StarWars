import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Style {
	infoContainer: ViewStyle;
	tite: TextStyle;
	value: TextStyle;
	filmsContainer: ViewStyle;
	filmsTitle: TextStyle;
	filmTitle: TextStyle;
}

export const Styles: Style = StyleSheet.create({
	infoContainer: {
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#d3d3d3',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
	},
	tite: {
		paddingLeft: 20,
	},
	value: {
		paddingRight: 20,
		fontWeight: '600',
	},
	filmsTitle: {
		fontSize: 32,
		marginVertical: 10,
	},
	filmsContainer: {
		marginHorizontal: 20,
	},
	filmTitle: {
		fontSize: 20,
		marginBottom: 5,
	},
});
