import FavIcon from '@components/organisms/Favicon'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'
const sprite = require('svg-sprite-loader/runtime/sprite.build')

class CustomDocument extends Document<{
  spriteContent: string
  image: any
}> {
  public static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const spriteContent = sprite.stringify()

    const url = `https://tvh-api.medpro.com.vn/banner-images`
    const x = await fetch(url)
    const dta = await x.json()

    const image = dta[0].image[0].url

    return {
      image,
      spriteContent,
      ...initialProps,
    }
  }

  public render() {
    return (
      <Html lang="vi">
        <Head>
          <FavIcon image={this.props.image} />
        </Head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
