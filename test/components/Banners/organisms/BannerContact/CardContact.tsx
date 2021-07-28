import React from 'react'
import { ItemBanner, ItemCard } from './bannercontact.interface'
import style from './styles.module.less'

const CardContact = ({ cardContact }: ItemBanner) => {
  return (
    <ul className={style.listContact}>
      {cardContact.map(
        ({ key, title, subTitle, link, img, textBottom }: ItemCard) => {
          return (
            <li key={key}>
              <div className={style.card}>
                <h2>{title}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: subTitle
                  }}
                />

                <figure>
                  {img?.map(({ url }) => {
                    const imageErrorSrc = '/images/error.svg'
                    const urlImage = url || imageErrorSrc
                    return (
                      <img
                        key={url}
                        src={urlImage}
                        alt={'icon'}
                        onError={(e: any) => {
                          e.target.src = imageErrorSrc
                        }}
                      />
                    )
                  })}
                </figure>
                <a
                  href={link}
                  dangerouslySetInnerHTML={{ __html: textBottom }}
                />
              </div>
            </li>
          )
        }
      )}
    </ul>
  )
}

export default CardContact
