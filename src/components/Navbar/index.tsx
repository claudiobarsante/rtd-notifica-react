import React from 'react';
import * as S from './styles';

type Props = {
	currentPage: string;
};
export default function Navbar({ currentPage: page }: Props) {
	console.log('page ', page);
	console.log('carreguei');
	return (
		<S.Container>
			<p>Aqui fica o navbar</p>
		</S.Container>
	);
}
