import React, { useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { DETAILED_MEMBER_QUERY } from '../../services/graphql/queries';
import { Styles as styles } from './DetailedMemberScreen.styles';
import { GenderImage } from '../../components';

const DetailedMemberScreen: React.FC = ({ route }) => {
	const memberId = route.params.memberId;

	const { data, loading } = useQuery(DETAILED_MEMBER_QUERY, {
		variables: {
			id: memberId,
		},
	});

	const personData = useMemo(() => {
		if (!data) {
			return [];
		}
		return [
			{
				title: 'Name',
				id: 'name',
				value: data.person.name,
			},
			{
				title: 'Birth Year',
				id: 'birthYear',
				value: data.person.birthYear,
			},
			{
				title: 'Height',
				id: 'height',
				value: data.person.height,
			},
			{
				title: 'Gender',
				id: 'gender',
				value: data.person.gender,
			},
			{
				title: 'Hair Color',
				id: 'hairColor',
				value: data.person.hairColor,
			},
			{
				title: 'Eye Color',
				id: 'eyeColor',
				value: data.person.eyeColor,
			},
			{
				title: 'Mass',
				id: 'mass',
				value: data.person.mass,
			},
			{
				title: 'Skin Color',
				id: 'skinColor',
				value: data.person.skinColor,
			},
		];
	}, [data]);

	if (loading) {
		return <View />;
	}

	return (
		<ScrollView>
			<GenderImage gender={data.person.gender} size={'bg'} />
			<View>
				{personData.map((info) => {
					return (
						<View key={info.id} style={styles.infoContainer}>
							<Text style={styles.tite}>{info.title}</Text>
							<Text style={styles.value}>{info.value}</Text>
						</View>
					);
				})}
			</View>
			<View style={styles.filmsContainer}>
				<Text style={styles.filmsTitle}>Films:</Text>
				{data.person.filmConnection.films.map((film, index) => {
					return (
						<View key={film.title}>
							<Text style={styles.filmTitle}>
								{index + 1}. {film.title}
							</Text>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default DetailedMemberScreen;
