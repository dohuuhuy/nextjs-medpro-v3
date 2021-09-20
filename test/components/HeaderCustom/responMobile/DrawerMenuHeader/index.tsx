import React, { useState } from 'react'
import styles from './styles.module.less'
import { Drawer } from 'antd'
import { MenuDrawer } from './MenuDrawer'
import { NavbarHeaderMobile } from './NavbarHeaderMobile'
import { PropsHeader, itemSupport, Authen } from '../../interface.header'

export interface PropsMenuDrawer {
  listSupport: itemSupport
  logo: { mobile: string }
  authen: Authen
  setDrawer: any
}

export const DrawerMenuHeader = ({ dataHeader, Authencation }: PropsHeader) => {
  // console.log("authen ", Authencation)
  const [drawer, setDrawer] = useState<boolean>(false)

  function visibleDrawer() {
    setDrawer(!drawer)
  }

  const { logo, listSupport } = dataHeader

  const Menudrawer: PropsMenuDrawer = {
    listSupport: listSupport,
    logo: logo,
    authen: Authencation,
    setDrawer: visibleDrawer
  }
  return (
    <React.Fragment>
      <NavbarHeaderMobile
        drawer={drawer}
        logo={logo}
        togleDrawer={visibleDrawer}
      />
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
        <MenuDrawer {...Menudrawer} />
      </Drawer>
    </React.Fragment>
  )
}
