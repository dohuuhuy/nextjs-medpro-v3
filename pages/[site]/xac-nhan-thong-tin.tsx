import { ConfirmInfo } from '@componentsTest/ConfirmInfo'
import dynamic from 'next/dynamic'
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '@src/store/interface'
import * as ac from '@actionStore'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const ConfirmInfoPage = () => {
  const user = useSelector((state: AppState) => state.user)
  console.log('user :>> ', user);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ac.listPatientRequest())
  }, [])
  console.log('user.listPatient :>> ', user.listPatient);
  return (
    <>
      <ConfirmInfo {...user.listPatient} />
    </>
  )
}
ConfirmInfoPage.layout = DefaultLayout
export default ConfirmInfoPage
