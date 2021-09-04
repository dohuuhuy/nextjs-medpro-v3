import SelectHospitalCustom from '@componentsTest/SelectHospitalCustom'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const SelectHospitalPage = ({ listHospital }: any) => {
  const listCity = useSelector(
    (state: AppState) => state.totalDataReducer.listCity
  )

  return (
    <SelectHospitalCustom listHospital={listHospital} listCity={listCity} />
  )
}

export default SelectHospitalPage
