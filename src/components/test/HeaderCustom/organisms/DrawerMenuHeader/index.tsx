/* eslint-disable @next/next/no-img-element */
import Container from '@components/test/Container'
import { Button, Col, Drawer, Row } from 'antd'
import React, { useState } from 'react'
import { NavbarHeaderMobile } from '../../atoms/NavbarHeaderMobile'
import { MenuDrawer } from '../../molecules/MenuDrawer'
import style from './styles.module.less'

interface Props {
  dataHeader: Array<any>
  Authencartion: Array<any>
}

export const DrawerMenuHeader = ({ dataHeader, Authencartion }: Props) => {
  const [drawer, setDrawer] = useState<boolean>(false)

  function visibleDrawer() {
    setDrawer(!drawer)
  }

  const { logoHeaderMobile, listSupport }: any = dataHeader

  return (
    <>
      <NavbarHeaderMobile
        drawer={drawer}
        logo={logoHeaderMobile}
        togleDrawer={() => visibleDrawer()}
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
          setDrawer={() => visibleDrawer()}
        />
      </Drawer>
    </>
  )
}
