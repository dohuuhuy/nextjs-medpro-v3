import { currentEnv } from '@src/config/envs'
import { NewsArticleJsonLd, NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

interface Props {
  posts: any
}

const SEOPost = ({ posts }: Props) => {
  const router = useRouter()

  if (!posts) return null

  const {
    name,
    title,
    description,
    author,
    created_at,
    updated_at,
    image,
    keywords,
    published_at,
    content
  }: any = posts

  return (
    <>
      <NextSeo
        title={name || title}
        description={description}
        canonical={router.asPath}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: '2017-06-21T23:04:13Z',
            modifiedTime: '2018-01-21T18:04:43Z',
            expirationTime: '2022-12-21T22:04:11Z',
            section: 'Section II',
            authors: [
              'https://www.example.com/authors/@firstnameA-lastnameA',
              'https://www.example.com/authors/@firstnameB-lastnameB'
            ],
            tags: ['Tag A', 'Tag B', 'Tag C']
          },
          url: router.asPath,
          title: name || title,
          description,
          images: [
            {
              url: `${currentEnv.API_CMS + image[0].url}`,
              width: 800,
              height: 600
            }
          ],
          site_name: name || title
        }}
      />
      <NewsArticleJsonLd
        url={'url'}
        title={name || title}
        images={image}
        section={name || title}
        keywords={keywords}
        dateCreated={created_at}
        datePublished={published_at}
        dateModified={updated_at}
        authorName={author}
        publisherName={author}
        publisherLogo=''
        description={description}
        body={content}
      />
    </>
  )
}

export default SEOPost
