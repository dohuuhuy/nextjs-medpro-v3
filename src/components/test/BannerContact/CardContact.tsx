/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import style from "./styles.module.less";
import { Row, Col } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import { ItemBanner, ItemCard } from './bannercontact.interface';

const CardContact = ({ cardContact }: ItemBanner) => {
    const RenderHTML = (props: any) => (
        <span dangerouslySetInnerHTML={{ __html: props.HTML }}></span>
    )

    return (
        <React.Fragment>
            {cardContact.map(({ key, title, subtiltle, link, img, textBottom, icon}: ItemCard,  index: number) => (
                <Row key={index} className={style.optionContacts}>
                    <h2 className={style.titleContact}>
                        <RenderHTML HTML={title} />
                    </h2>
                    <p className={style.subTitleContact}>
                        <RenderHTML HTML={subtiltle} />
                    </p>
                    <Col className={style.viewImgContact}>
                        {img ? (
                            img.map(image => (
                                <img src={image.url} className={style.Img} />
                            ))
                        ) : null
                        }
                    </Col>
                    <Row className={style.viewTxtBottom}>
                        {link ? (
                            <a href={link}>
                                <p className={style.txtBottom} style={{
                                    color: key === "phoneContact" ? "#0056BF" : undefined
                                }}>
                                    <RenderHTML HTML={textBottom} />
                                    {icon ? (
                                        <ArrowRightOutlined className={style.marginIcon} />
                                    ) : null
                                    }
                                </p>
                            </a>
                        ) : (
                            <p className={style.txtBottom} style={{
                                color: key === "workingTimes" ? "#0056BF" : "#FF0000" 
                            }}>
                                <RenderHTML HTML={textBottom} />
                            </p>
                        )
                        }
                    </Row>
                </Row>
            )
            )}
        </React.Fragment>
    )
}

export default CardContact
