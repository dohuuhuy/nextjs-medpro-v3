import FavIcon from '@components/organisms/Favicon'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
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

    return {
      spriteContent,
      ...initialProps
    }
  }

  public render() {
    return (
      <Html lang='vi'>
        <Head>
          <FavIcon image={this.props.image} />
          <script
            src='https://resource-testing.medpro.com.vn/static/js/wechat.js'
            async
          />
          <script
            src='https://www.googletagmanager.com/gtag/js?id=UA-148064018-1'
            async
          />
          <script
            src='https://resource-testing.medpro.com.vn/static/js/gtag.js'
            async
          />
          <script src='https://zjs.zdn.vn/zalo/sdk.js' async></script>
          <link rel='preconnect' href='https://fonts.googleapis.com'></link>
          <link rel='preconnect' href='https://fonts.gstatic.com'></link>

          <link
            href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
            rel='stylesheet'
          ></link>

          <link
            rel='stylesheet'
            type='text/css'
            charSet='UTF-8'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />
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
