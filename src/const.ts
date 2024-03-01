export const Setting = {
  OffersCount: 5
};

export const PlacesOption = {
  POPULAR: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first'
} as const;

export const Locations = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;

export const OfferInsideItems = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge'
] as const;

export const GalleryImages = [
  {
    src: 'img/room.jpg',
    alt: 'Photo studio'
  },
  {
    src: 'img/apartment-01.jpg',
    alt: 'Photo studio'
  },
  {
    src: 'img/apartment-02.jpg',
    alt: 'Photo studio'
  },
  {
    src: 'img/apartment-03.jpg',
    alt: 'Photo studio'
  },
  {
    src: 'img/studio-01.jpg',
    alt: 'Photo studio'
  },
  {
    src: 'img/apartment-01.jpg',
    alt: 'Photo studio'
  },
] as const;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RatingValues = [5, 4, 3, 2, 1] as const;
