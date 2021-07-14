import DemoSagas from '@componentStore/demo/demo.saga'
import hospital_Sagas from '@componentStore/hospital/hospital.saga'
import totalData_Sagas from '@componentStore/totalData/totalData.saga'
import { all } from 'redux-saga/effects'

export default function* rootSaga(): Generator {
  yield all([DemoSagas(), totalData_Sagas(), hospital_Sagas()])
}
