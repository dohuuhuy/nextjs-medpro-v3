import Dropdown from 'antd/lib/dropdown'
import React from 'react'
import { BtnLogin } from '../../atoms/BtnLogin'
import DropdownProfile from '../../organisms/DropdownProfile'

export const HandlerBtnUser = ({ isAuthen = false, nameUser }: any) => {
  switch (isAuthen) {
    case true:
      return (
        <Dropdown
          overlay={<DropdownProfile nameUser={nameUser} />}
          trigger={['click']}
          placement='bottomRight'
        >
          <BtnLogin nameUser={nameUser} isAuthen={isAuthen} />
        </Dropdown>
      )

    default:
      return <BtnLogin isAuthen={false} />
  }
}
