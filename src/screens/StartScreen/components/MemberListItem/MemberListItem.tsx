import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles as styles } from './MemberListItem.styles';
import { GenderImage } from '../../../../components';
import FavIcon from '../../../../assets/favIcon.js';

enum Genders {
	Male = 'male',
	Female = 'female',
	Na = 'n/a',
	Hermaphrodite = 'hermaphrodite',
}

export type Member = {
	id: String;
	gender: Genders;
	birthYear: String;
	name: String;
	homeworld: Homeworld;
};

export type Homeworld = {
	name: String;
};

export interface MemberListItemProps {
	data: Member;
	onPress: Function;
	isInFavList: Boolean;
	toogleFavItem: Function;
}

export function MemberListItem(props: MemberListItemProps) {
	const { data, onPress, isInFavList, toogleFavItem } = props;

	const handlePress = useCallback(() => {
		return onPress(data.id);
	}, [data, onPress]);

	const handleToogleFavItem = useCallback(() => {
		return toogleFavItem(data.id, data.gender);
	}, [data, toogleFavItem]);

	return (
		<TouchableOpacity onPress={handlePress}>
			<View style={styles.container}>
				<View style={styles.leftSectionContainer}>
					<GenderImage gender={data.gender} size={'md'} />
					<View style={styles.valueContainer}>
						<View>
							<Text style={styles.title}>Name:</Text>
							<Text
								style={[styles.value, styles.nameValue]}
								ellipsizeMode={'tail'}
								numberOfLines={1}
							>
								{data.name}
							</Text>
						</View>
						<View>
							<Text style={styles.title}>Birth Year:</Text>
							<Text style={styles.value}>{data.birthYear}</Text>
						</View>
					</View>
				</View>
				<View style={styles.rightSectionContainer}>
					<View style={styles.valueContainer}>
						<View>
							<Text style={[styles.title, styles.rightText]}>
								Gender:
							</Text>
							<Text style={[styles.value, styles.rightText]}>
								{data.gender}
							</Text>
						</View>
						<View>
							<Text style={[styles.title, styles.rightText]}>
								Home World:
							</Text>
							<Text style={[styles.value, styles.rightText]}>
								{data.homeworld.name}
							</Text>
						</View>
					</View>
					<TouchableOpacity onPress={handleToogleFavItem}>
						<FavIcon
							color={isInFavList ? 'tomato' : 'grey'}
							style={styles.favIcon}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableOpacity>
	);
}
