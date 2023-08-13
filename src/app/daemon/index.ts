import {all} from 'redux-saga/effects';
import {watchFetchHomeData} from '../../redux/dashboard/dashboardSaga';

export default function* rootSaga() {
  yield all([watchFetchHomeData()]);
}
