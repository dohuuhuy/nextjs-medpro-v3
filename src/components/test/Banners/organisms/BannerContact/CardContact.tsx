/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import { ItemBanner, ItemCard } from './bannercontact.interface'
import style from './styles.module.less'

const CardContact = ({ cardContact }: ItemBanner) => {
  return (
    <ul className={style.listContact}>
      {cardContact.map(
        ({ key, title, subtiltle, link, img, textBottom }: ItemCard) => {
          return (
            <li key={key}>
              <div className={style.card}>
                <h2>{title}</h2>
                <p>{subtiltle}</p>
                <figure>
                  {img?.map(({ url }) => {
                    return <img key={url} src={url} alt={url} />
                  })}
                </figure>
                <a
                  href={link}
                  dangerouslySetInnerHTML={{ __html: textBottom }}
                ></a>
              </div>
            </li>
          )
        }
      )}
    </ul>
  )
}

export default CardContact
