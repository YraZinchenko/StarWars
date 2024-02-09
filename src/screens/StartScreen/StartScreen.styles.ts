import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Style {
	titleContainer: ViewStyle;
	fansContainer: ViewStyle;
	fullFlex: ViewStyle;
	title: TextStyle;
	section: ViewStyle;
}

export const Styles: Style = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	fansContainer: {
		marginBottom: 10,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	section: {
		marginHorizontal: 20,
	},
	title: {
		fontSize: 32,
	},
	fullFlex: {
		flex: 1,
	},
});
