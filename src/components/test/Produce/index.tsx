import React from 'react';
import style from "./styles.module.less";
import { Layout, Row, Col } from "antd";
import { ItemProduce, PropsProduce } from './produce.interface';

const { Content } = Layout;

const Produce = ({ dataProduce }: PropsProduce) => {
    if (!dataProduce || Object.keys(dataProduce).length < 1) {
        return <em>Lỗi không có dataProduce ...</em>
    }

    const { content }: any = dataProduce;
    
    return (
        <Content className={style.viewProduce}>
            <Col className={style.step}>
                {content.map(({id, stepName, name, content}: ItemProduce) => (
                        <Row key={id} className={style.rowStep}>
                            <Col className={style.coltitle}>
                                <b className={style.titleStep}> 
                                    {stepName}
                                </b>
                            </Col>
                            <div className={style.dot}/>
                            <Col className={style.colContent}>
                                <b className={style.titleStep}> 
                                    {name} 
                                </b>
                                <div className={style.view_content} dangerouslySetInnerHTML={{ __html: content }} />
                            </Col>
                        </Row>
                    )
                )}
            </Col>
        </Content>
    )
}

export default Produce;