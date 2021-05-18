import { IoClose } from 'react-icons/io5';
import * as S from './styles';

type Props = {
	onClick: () => void;
};
const ClearButton = ({ onClick }: Props) => {
	return (
		<S.Container onClick={onClick}>
			<IoClose />
		</S.Container>
	);
};

export default ClearButton;
