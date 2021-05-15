import React from 'react';
import * as S from './styles';

import { IoPin } from 'react-icons/io5';

type Props = {
	currentPage: string;
};
export default function Navbar({ currentPage: page }: Props) {
	console.log('page ', page);
	console.log('carreguei');
	let title = '';

	if (page.includes('overview')) {
		title = 'Notificações';
	}
	return (
		<S.Container>
			<h1>{title}</h1>
			<S.PinIcon />
		</S.Container>
	);
}
