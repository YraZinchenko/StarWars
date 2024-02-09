import React, { useCallback, useMemo, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@apollo/client';
import { MEMBERS_QUERY } from '../../services/graphql/queries';
import { List, ClearBtn, FanChip } from '../../components';
import { MemberListItem } from './components';
import { Styles as styles } from './StartScreen.styles';
import { MembersInterface } from '../../services/api/api.types';

export type Favorite = {
	id: String;
	gender: String;
};

const paginationOffset: Number = 10;

const StartScreen: React.FC = ({ navigation }) => {
	const [favorites, setFavorites] = useState<Favorite[]>([]);

	const { data, loading, previousData, fetchMore } = useQuery(MEMBERS_QUERY, {
		variables: {
			first: paginationOffset,
		},
	});

	useEffect(() => {
		const getData = async () => {
			try {
				const jsonValue = await AsyncStorage.getItem('Favorites');

				setFavorites(jsonValue != null ? JSON.parse(jsonValue) : []);
			} catch (e) {
				console.log('e', e);
			}
		};

		getData();
	}, []);

	const updateQuery = useCallback(
		(previousResult: MembersInterface, { fetchMoreResult }) => {
			if (!fetchMoreResult) {
				return previousResult;
			}

			return fetchMoreResult;
		},
		[],
	);

	const onLoadList = useCallback(() => {
		if (!loading && data?.allPeople?.pageInfo?.hasNextPage) {
			fetchMore({
				variables: {
					first: data.allPeople.people.length + paginationOffset,
				},
				updateQuery: updateQuery,
			});
		}
	}, [loading, data, fetchMore, updateQuery]);

	const toogleFavItem = useCallback((id: String, gender: String) => {
		setFavorites((list) => {
			const modList = list.some((el) => el.id === id)
				? list.filter((el) => el.id !== id)
				: [...list, { id, gender }];
			AsyncStorage.setItem('Favorites', JSON.stringify(modList));
			return modList;
		});
	}, []);

	const handleOpenDetailedPage = useCallback((memberId: String) => {
		navigation.navigate('DetailedMember', { memberId });
	}, []);

	const renderMemberItem = useCallback(
		({ item }) => {
			const isInFavList = favorites.some((el) => el.id === item.id);
			return (
				<MemberListItem
					data={item}
					onPress={handleOpenDetailedPage}
					isInFavList={isInFavList}
					toogleFavItem={toogleFavItem}
				/>
			);
		},
		[favorites, handleOpenDetailedPage, toogleFavItem],
	);

	const isFirstLoading = useMemo(() => {
		return !previousData && !data;
	}, [previousData, data]);

	const countFavs = useMemo(() => {
		let maleLength = 0;
		let femaleLength = 0;
		let othersLength = 0;

		favorites.forEach((fav) => {
			if (fav.gender === 'male') {
				maleLength++;
				return;
			}
			if (fav.gender === 'female') {
				femaleLength++;
				return;
			}
			othersLength++;
		});

		return [
			{
				count: maleLength,
				title: 'Male Fans',
				gender: 'male',
			},
			{
				count: femaleLength,
				title: 'Female Fans',
				gender: 'female',
			},
			{
				count: othersLength,
				title: 'Others',
				gender: 'others',
			},
		];
	}, [favorites]);

	const onClearAllFavs = useCallback(() => {
		setFavorites((_) => []);
		AsyncStorage.setItem('Favorites', JSON.stringify([]));
	}, []);

	if (isFirstLoading) {
		return <View />;
	}

	return (
		<SafeAreaView style={styles.fullFlex}>
			<View style={[styles.titleContainer, styles.section]}>
				<Text style={styles.title}>Fans</Text>
				<ClearBtn onPress={onClearAllFavs} />
			</View>
			<View style={styles.fansContainer}>
				{countFavs.map((fav) => {
					return (
						<FanChip
							key={fav.gender}
							title={fav.title}
							value={fav.count}
							gender={fav.gender}
						/>
					);
				})}
			</View>
			<List
				data={data.allPeople.people}
				onEndReached={onLoadList}
				renderItem={renderMemberItem}
			/>
		</SafeAreaView>
	);
};

export default StartScreen;
