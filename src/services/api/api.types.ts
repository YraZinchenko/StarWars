export interface MembersInterface {
	pageInfo: MembersPageInfo;
	people: Member[];
}

export interface MembersPageInfo {
	hasNextPage: Boolean;
	hasPreviousPage: Boolean;
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

export enum Genders {
	Male = 'male',
	Female = 'female',
	Na = 'n/a',
	Hermaphrodite = 'hermaphrodite',
}
