import { Col } from 'antd'
import React from 'react'
import { ItemContact } from './interface.footer'
import style from './styles.module.less'

interface Props {
  infoContact: Array<ItemContact>
}

export const InfoFooter = ({ infoContact }: Props) => {
  return (
    <React.Fragment>
      {infoContact?.map((item, index: number) => (
        <Col key={index}>
          {item.label === 'Website' ? (
            <a key={item.id} href={item.value} className={style.aLink}>
              <p className={style.infocompany}>
                {item.label} + {''} + {item.value}
              </p>
            </a>
          ) : (
            <p
              className={item.label ? style.infocompany : style.nameCompany}
              dangerouslySetInnerHTML={{
                __html: item.label ? item.label + '\t' + item.value : item.value
              }}
            />
          )}
        </Col>
      ))}
    </React.Fragment>
  )
}
