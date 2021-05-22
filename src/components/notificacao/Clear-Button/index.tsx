import React from 'react';
import { IoClose } from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';
import * as S from './styles';

type Props = {
	onClick: () => void;
};
const ClearButton = ({ onClick }: Props) => {
	console.log('renderizando clear button');
	return (
		<>
			<S.Container onClick={onClick} data-tip data-for='ClearButton'>
				<IoClose />
			</S.Container>
			<ReactTooltip id='ClearButton' place='top' effect='float' type='success'>
				Limpa sua pesquisa
			</ReactTooltip>
		</>
	);
};

export default React.memo(ClearButton);
