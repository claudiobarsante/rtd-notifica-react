import * as S from './styles';

type Props = {
	show: boolean;
};
const FilterCard = ({ show }: Props) => {
	return <S.Container mostrar={show}></S.Container>;
};

export default FilterCard;
