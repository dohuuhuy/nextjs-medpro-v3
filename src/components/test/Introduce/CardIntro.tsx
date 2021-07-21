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
                <img src={imgCard} alt={title} />
                <div className={Styles.footerCard_Text}>
                  <a href={link}>
                    <div className={Styles.title}>
                      <span>{title}</span>
                      <p>{subTitle}</p>
                    </div>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Container>
  )
}
