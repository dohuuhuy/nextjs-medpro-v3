export interface Address {
  streetAddress: string
  addressLocality: string
  addressRegion?: string
  postalCode: string
  addressCountry: string
}

export interface LocalBusinessJsonLdProps {
  keyOverride?: string
  type: string
  id: string
  name: string
  description: string
  url?: string
  telephone?: string
  address: Address
  geo?: Geo
  images?: string[]
  rating?: AggregateRating
  review?: Review[]
  priceRange?: string
  servesCuisine?: string | string[]
  sameAs?: string[]
  openingHours?: OpeningHoursSpecification | OpeningHoursSpecification[]
  action?: Action
  areaServed?: AreaServed
  makesOffer?: MakesOffer
}

declare type Action = {
  actionName: string
  actionType: string
  target: string
}
declare type AggregateRating = {
  ratingValue: string
  ratingCount: string
}
declare type AreaServed = GeoCircle[]
declare type Geo = {
  latitude: string
  longitude: string
}
declare type GeoCircle = {
  geoMidpoint: Geo
  geoRadius: string
}
declare type MakesOffer = Offer[]
declare type Offer = {
  priceSpecification: PriceSpecification
  itemOffered: Service
}
declare type OpeningHoursSpecification = {
  opens: string
  closes: string
  dayOfWeek: string | string[]
  validFrom?: string
  validThrough?: string
}
declare type PriceSpecification = {
  type: string
  priceCurrency: string
  price: string
}
declare type Rating = {
  ratingValue: string
  worstRating?: string
  bestRating?: string
  reviewAspect?: string
}
declare type Review = {
  author: string
  datePublished: string
  reviewBody: string
  reviewRating: Rating
  name?: string
}
declare type Service = {
  name: string
  description: string
}

//  dữ liệu mẫu

export const SEOContact = {
  type: 'Store',
  id: 'https://news.medpro.com.vn/lien-he',
  name: 'Liên hệ',
  description: 'Trang liên hệ của công ty PKH',
  url: 'https://news.medpro.com.vn/lien-he',
  telephone: '19002267',
  address: {
    streetAddress:
      '84 Thành Thái, Phường 12, Quận 10,thành phố Hồ Chí Minh 700000',
    addressLocality: 'Quận 10',
    addressRegion: 'Thành phố Hồ Chí Minh',
    postalCode: '700000',
    addressCountry: 'VN'
  },
  geo: {
    latitude: '10.8059378',
    longitude: '106.6123597,13'
  },
  images: [
    'https://i.pinimg.com/564x/25/d5/55/25d5552e9f68490839815b51920bc6eb.jpg'
  ],
  openingHours: [
    {
      opens: '07:00',
      closes: '16:00',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      validFrom: '2019-12-23',
      validThrough: '2020-04-02'
    },
    {
      opens: '07:00',
      closes: '12:00',
      dayOfWeek: 'Saturday',
      validFrom: '2019-12-23',
      validThrough: '2020-04-02'
    }
  ]
}
