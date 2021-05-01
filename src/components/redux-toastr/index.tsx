import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const Toast = () => {
	return (
		<ReduxToastr
			progressBar
			preventDuplicates
			transitionIn='fadeIn'
			transitionOut='fadeOut'
			closeOnToastrClick
		/>
	);
};

export default Toast;
