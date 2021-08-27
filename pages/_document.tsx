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
          <FavIcon />
          {/* <script
            src='https://resource-testing.medpro.com.vn/static/js/wechat.js'
            async={true}
          />
          <script
            src='https://www.googletagmanager.com/gtag/js?id=UA-148064018-1'
            async={true}
          />
          <script
            src='https://resource-testing.medpro.com.vn/static/js/gtag.js'
            async={true}
          />
          <script src='https://zjs.zdn.vn/zalo/sdk.js' async={true} />

          <link rel='preconnect' href='https://fonts.googleapis.com' />

          <link rel='preconnect' href='https://fonts.gstatic.com' /> */}

          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            rel='stylesheet'
          />

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
