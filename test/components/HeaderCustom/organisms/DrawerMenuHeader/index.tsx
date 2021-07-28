import { Drawer } from 'antd'
import React, { useState } from 'react'
import { MenuDrawer } from '../../molecules/MenuDrawer'
import { NavbarHeaderMobile } from '../../molecules/NavbarHeaderMobile'

interface Props {
  dataHeader: any[]
  Authencartion: any[]
}

export const DrawerMenuHeader = ({ dataHeader, Authencartion }: Props) => {
  const [drawer, setDrawer] = useState<boolean>(false)

  function visibleDrawer() {
    setDrawer(!drawer)
  }

  const { logoHeaderMobile, listSupport }: any = dataHeader

  return (
    <React.Fragment>
      <NavbarHeaderMobile
        drawer={drawer}
        logo={logoHeaderMobile}
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
        <MenuDrawer
          listSupport={listSupport}
          Authencartion={Authencartion}
          logo={logoHeaderMobile}
          setDrawer={visibleDrawer}
        />
      </Drawer>
    </React.Fragment>
  )
}
