import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Styles as styles } from './ClearBtn.styles';

export interface ClearBtnProps {
	onPress: Function;
}

export function ClearBtn(props: ClearBtnProps) {
	const { onPress } = props;

	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={styles.btnText}>CLEAR FANS</Text>
		</TouchableOpacity>
	);
}
