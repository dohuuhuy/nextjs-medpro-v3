import { all, fork, put, takeEvery } from 'redux-saga/effects'
import { demoActionTypes, getDemo_Params } from './demo.types'

function* demoSaga({ nameColor }: getDemo_Params) {
  try {
    console.log(`nameColor`, nameColor)
    yield put({
      type: demoActionTypes.DEMO_SUCCESS,
      nameColor,
    })
  } catch (error) {}
}

function* watchDemo() {
  console.log(`2`, 2)
  yield takeEvery(demoActionTypes.GET_DEMO, demoSaga)
}

const DemoSagas = function* root() {
  console.log(`3`, 3)
  yield all([fork(watchDemo)])
}
export default DemoSagas
