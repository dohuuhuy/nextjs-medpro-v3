import { demoActionTypes, demoParams } from '@src/store/interface'
import { all, fork, put, takeLatest } from 'redux-saga/effects'

function* demoSaga({ bookingCurrent }: demoParams.GetDemoParams) {
  yield put({
    type: demoActionTypes.DEMO_SUCCESS,
    bookingCurrent
  })
}

function* watchDemo() {
  yield takeLatest(demoActionTypes.GET_DEMO as any, demoSaga)
}

const DemoSagas = function* root() {
  yield all([fork(watchDemo)])
}
export default DemoSagas
