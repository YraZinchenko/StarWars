import React from 'react';
import { Image } from 'react-native';
import { Styles as styles } from './GenderImage.styles';
import maleIcon from '../../assets/male.png';
import femaleIcon from '../../assets/female.png';
import robotIcon from '../../assets/robot.png';
import hermaIcon from '../../assets/herma.png';
import peopleIcon from '../../assets/people.jpeg';
import { Genders } from '../../services/api';

export interface GenderImageProps {
	size: String;
	gender: String;
}

const genderListImage = {
	[Genders.Male]: maleIcon,
	[Genders.Female]: femaleIcon,
	[Genders.Na]: robotIcon,
	[Genders.Hermaphrodite]: hermaIcon,
};

const sizeStyles = {
	bg: styles.bg,
	md: styles.md,
	sm: styles.sm,
};

export function GenderImage(props: GenderImageProps) {
	const { size, gender } = props;

	if (!genderListImage[gender]) {
		return <Image source={peopleIcon} style={styles.sm} />;
	}

	return (
		<Image source={genderListImage[gender]} style={[sizeStyles[size]]} />
	);
}
