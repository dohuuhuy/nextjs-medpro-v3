import FavIcon from '@components/organisms/Favicon'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React from 'react'
import sprite from 'svg-sprite-loader/runtime/sprite.build'
interface CustomDocumentProps {
  spriteContent: string
}

class CustomDocument extends Document<CustomDocumentProps> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<CustomDocumentProps & DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    const spriteContent = sprite.stringify()
    return {
      spriteContent,
      ...initialProps
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='vi'>
        <Head>
          <FavIcon />
          <meta charSet='utf-8' />
          <meta content='IE=edge' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lemonada:wght@300;400;500;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
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
          <script
            src='https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js'
            defer
          ></script>
          <script
            src='https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js'
            defer
          ></script>
          <script
            src='https://www.gstatic.com/firebasejs/8.1.1/firebase-analytics.js'
            defer
          ></script>
          <script
            async
            src='https://images.dmca.com/Badges/DMCABadgeHelper.min.js'
            defer
          ></script>
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
