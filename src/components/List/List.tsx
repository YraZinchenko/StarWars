import React from 'react';
import { FlatList } from 'react-native';

export interface ListProps {
	data: any;
	onEndReached: Function;
	renderItem: Function;
}

export function List(props: ListProps) {
	const { data, onEndReached, renderItem } = props;

	return (
		<FlatList
			data={data}
			onEndReached={onEndReached}
			onEndReachedThreshold={0.1}
			renderItem={renderItem}
		/>
	);
}
