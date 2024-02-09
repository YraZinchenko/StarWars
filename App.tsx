/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import App from './src/app.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function InitialApp(): React.JSX.Element {
	const client = new ApolloClient({
		uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	);
}

export default InitialApp;
