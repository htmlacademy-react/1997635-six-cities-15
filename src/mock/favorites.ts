import { TOffer } from '../types/offers';

export const Favorites: TOffer[] = [
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
    isFavorite: true,
    isPremium: false,
    rating: 2.1
  },
  {
    id: '711b6c78-6561-452c-afba-58393679569d',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'hotel',
    price: 407,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.947361,
      longitude: 6.9799739999999995,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8
  },
  {
    id: '9b7d3877-aca6-47a2-bd9d-d235a34d3710',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'room',
    price: 101,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.960361,
      longitude: 6.967974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.6
  },
  {
    id: '626beca0-de81-4b6a-bf8a-e89efa99d098',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 304,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.867557,
      longitude: 4.371696999999999,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.3
  }
];

