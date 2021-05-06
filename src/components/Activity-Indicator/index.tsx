import { SwapSpinner } from 'react-spinners-kit';
import { Container } from './styles';

type Props = {
	isLoading: boolean;
};
const ActivityIndicator = ({ isLoading = false }: Props) => {
	return (
		<Container>
			<SwapSpinner size={45} color={'#ff9000'} loading={isLoading} />
		</Container>
	);
};

export default ActivityIndicator;
