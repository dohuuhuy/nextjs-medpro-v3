/* eslint-disable @next/next/no-img-element */
import Container from './../../../Container'
import style from './styles.module.less'
import { ContactDetail } from './ContactDetail'

export const LienHeContent = ({ content }: PropsProduce) => {

  if (!content) {
    return <Container className={style.containerError}>gelo</Container>
  }
  const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2723090642025!2d106.6757408141166!3d10.790443661887062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d5352152d1%3A0xf4c41192e0bee7af!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24g4buobmcgROG7pW5nIFBLSA!5e0!3m2!1svi!2s!4v1592201096115!5m2!1svi!2s"
  return (
    <Container className={style.containerDefault}>
      <div style={{ flexDirection: "column" }}>
        <ContactDetail dataContactDetail={content.detailsContact} />
        <div className={style.map}>
          <iframe title="" src={map} />
        </div>
      </div>
    </Container>
  )
}
export interface PropsProduce {
  content: DetailContact
}
export interface DetailContact {
  detailsContact: any[]
}
