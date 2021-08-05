import { SelectServiceCustom } from '@componentsTest/SelectServiceCustom'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

export const SelectServicePage = () => {
  const listHospital = useSelector(
    (state: AppState) => state.hospitalReducer.listHospital
  )

  const listCity = useSelector(
    (state: AppState) => state.totalDataReducer.listCity
  )

  return (
    <SelectServiceCustom />
  )
}
