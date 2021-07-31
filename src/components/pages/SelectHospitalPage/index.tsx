import SelectHospitalCustom from '@componentsTest/SelectHospitalCustom'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const SelectHospitalPage = () => {
  const listHospital = useSelector(
    (state: AppState) => state.hospitalReducer.listHospital
  )

  return <SelectHospitalCustom listHospital={listHospital} />
}

export default SelectHospitalPage
