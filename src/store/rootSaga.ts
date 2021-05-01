import { all, call } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import notificacoesSaga from './notificacao/sagas';

export default function* rootSaga() {
	yield all([call(authSaga), call(notificacoesSaga)]);
}
