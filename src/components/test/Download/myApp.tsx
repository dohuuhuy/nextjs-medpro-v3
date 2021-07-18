import React from 'react'
import Styles from './style.module.less'

interface myApp {
  arrApp: Item[]
}
interface Item {
  key: string
  imgApp: string
  linkApp: string
}

export const MyApp = ({ arrApp }: myApp) => {
  return (
    <React.Fragment>
      <div className={Styles.ios_android}>
        {arrApp.map(({ key, imgApp, linkApp }: Item) => (
          <a key={key} href={linkApp} target="_blank">
            <img src={imgApp} className={Styles.mid_logo} />
          </a>
        ))}
      </div>
    </React.Fragment>
  )
}
