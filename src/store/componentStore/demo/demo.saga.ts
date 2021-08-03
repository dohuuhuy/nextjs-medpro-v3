import { demoActionTypes, demoParams } from '@store/interface'
import { all, fork, put, takeLatest } from 'redux-saga/effects'

function* demoSaga({ nameColor }: demoParams.GetDemoParams) {
  yield put({
    type: demoActionTypes.DEMO_SUCCESS,
    nameColor
  })
}

function* watchDemo() {
  yield takeLatest(demoActionTypes.GET_DEMO as any, demoSaga)
}

const DemoSagas = function* root() {
  yield all([fork(watchDemo)])
}
export default DemoSagas
