/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Styles from './style.module.less'
import Container from '../Container'

interface CardIntro {
  dataCardIntro: CardIntroItem[]
}
export interface CardIntroItem {
  title: string
  subTitle: string
  imgCard: string
  link: string
  button: any
}

export const CardIntro = ({ dataCardIntro }: CardIntro) => {
  return (
    <Container>
      <div className={Styles.card}>
        <div className={Styles.boxCard}>
          {dataCardIntro.map(
            ({ title, subTitle, imgCard, link }: CardIntroItem) => (
              <div className={Styles.footerCard} key={title}>
                <div>
                  <img src={imgCard} className={Styles.img} alt={title} />
                </div>
                <a href={link}>
                  <div className={Styles.footerCard_Text}>
                    <div className={Styles.title}>
                      <span>{title}</span>
                      <p>{subTitle}</p>
                    </div>
                  </div>
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </Container>
  )
}
