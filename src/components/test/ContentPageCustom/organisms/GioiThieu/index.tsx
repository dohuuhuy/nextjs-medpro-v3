import Container from '@components/test/Container'
import style from './styles.module.less'

export const GioiThieuContent = ({ content }: any) => {
  return (
    <Container className={style.GioiThieuContent}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}
