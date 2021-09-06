import { NewsArticleJsonLd, NextSeo } from 'next-seo'

interface Props {
  posts: any
}

const SEO_Post = ({ posts }: Props) => {
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
        canonical={'url'}
        openGraph={{
          url: '',
          title: name || title,
          description,
          images: [
            {
              url: '',
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

export default SEO_Post
