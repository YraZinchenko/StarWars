import { gql } from '@apollo/client';

export const MEMBERS_QUERY = gql`
	query AllPeople($first: Int) {
		allPeople(first: $first) {
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
			people {
				id
				name
				gender
				homeworld {
					name
				}
				birthYear
			}
		}
	}
`;

export const DETAILED_MEMBER_QUERY = gql`
	query Person($id: ID) {
		person(id: $id) {
			name
			id
			birthYear
			height
			gender
			hairColor
			eyeColor
			mass
			skinColor
			filmConnection(first: 10) {
				films {
					title
				}
			}
		}
	}
`;
