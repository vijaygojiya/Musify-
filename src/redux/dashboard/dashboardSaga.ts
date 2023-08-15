import {put, call, takeLatest} from 'redux-saga/effects';
import {HomeDataType, dashboardActions} from './dashboardSlice';
import {getResponse} from '../../api/getResponse';
import {apiEndPoints} from '../../api/ApiConst';
import {formatHomePageData} from '../../api/format';
import {showToast} from '../../utils/tost';

function* fetchHomeDataSaga() {
  try {
    const data = yield call(getResponse, apiEndPoints.homeData);

    if (data.data) {
      const formattedData: HomeDataType = yield call(
        formatHomePageData,
        data.data,
      );
      yield put(dashboardActions.fetchHomeDataSuccess(formattedData));
    }
  } catch (error) {
    yield put(dashboardActions.fetchHomeDataFailed());
    yield call(
      showToast,
      `${error?.response?.data?.message || error?.message}`,
    );
  }
}

export function* watchFetchHomeData() {
  yield takeLatest(dashboardActions.fetchHomeData.type, fetchHomeDataSaga);
}
