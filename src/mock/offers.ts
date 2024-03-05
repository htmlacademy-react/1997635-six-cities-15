import { TOffer } from '../types/offers';

export const Offers: TOffer[] = [
  {
    id: 'fce895d5-7d44-4f97-8674-89c052961e5b',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 145,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.1,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      'img/apartment-01.jpg'
    ],
    maxAdults: 4
  },
  {
    id: 'bb24c641-a20b-4bfd-8731-2db7fa55f5a7',
    title: 'Tile House',
    type: 'hotel',
    price: 497,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.9,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      'img/studio-01.jpg'
    ],
    maxAdults: 4
  },
  {
    id: 'a65fed04-5db4-4fbb-936b-c699e56269c8',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 821,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.7,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      'img/studio-01.jpg'
    ],
    maxAdults: 3
  },
  {
    id: '7236b959-68e2-4c07-961d-65c0c0b5bca0',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 226,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/room.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '78db97ed-e132-4b9d-a2e6-5602159b2266',
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 189,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.934361,
      longitude: 6.943974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.9,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/room.jpg'
    ],
    maxAdults: 7
  }
];
