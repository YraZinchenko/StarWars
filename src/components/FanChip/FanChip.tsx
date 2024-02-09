import React from 'react';
import { Text, View } from 'react-native';
import { Styles as styles } from './FanChip.styles';
import { GenderImage } from '../../components';

export interface FanChipProps {
	title: String;
	value: Number;
	gender: String;
}

export function FanChip(props: FanChipProps) {
	const { title, value, gender } = props;

	return (
		<View style={styles.container}>
			<View style={styles.valueContainer}>
				<GenderImage gender={gender} size={'sm'} />
				<Text style={styles.value}>{value}</Text>
			</View>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}
