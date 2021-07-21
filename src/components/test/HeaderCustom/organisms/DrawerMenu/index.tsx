import { Drawer } from 'antd'
import React, { useState } from 'react'
import MenuDrawer from '../MenuDrawer'

interface Props {
  dataHeader: Array<any>
  Authencartion: Array<any>
}

export const DrawerMenu = ({ dataHeader, Authencartion }: Props) => {
  const [drawer, setDrawer] = useState<boolean>(false)

  function visibleDrawer() {
    setDrawer(!drawer)
  }

  function closeDrawer() {
    setDrawer(false)
  }

  const { logoHeaderMobile, listSupport }: any = dataHeader

  return (
    <Drawer
      placement='right'
      closable={false}
      visible={drawer}
      width={'100%'}
      bodyStyle={{
        padding: 0,
        backgroundColor: '#F2F2F2'
      }}
    >
      <MenuDrawer
        Menu={listSupport}
        Authencartion={Authencartion}
        logo={logoHeaderMobile}
        closeDrawer={closeDrawer}
        setDrawer={visibleDrawer}
      />
    </Drawer>
  )
}
