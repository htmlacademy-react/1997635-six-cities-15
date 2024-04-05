export const MIN_LENGTH_COMMENT = 50;

export const MAX_NEAR_OFFERS_COUNT = 3;

export const MAX_IMAGES_COUNT = 6;

export const MAX_REVIEWS_COUNT = 10;

export enum PlacesOption {
  Popular = 'Popular',
  Price_to_high = 'Price: low to high',
  Price_to_low = 'Price: high to low',
  Top_rated = 'Top rated first'
}

export enum Locations {
  Paris ='Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const enum HousingTypes {
  apartment = 'apartment',
  room = 'room',
  house = 'house',
  hotel = 'hotel'
}

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

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Empty = '/empty'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RatingValues = [5, 4, 3, 2, 1] as const;

export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export const DEFAULT_CITY = Locations.Paris;

export const LocationsData = {
  [Locations.Paris]: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  [Locations.Amsterdam]: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  [Locations.Brussels]: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  [Locations.Cologne]: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  [Locations.Dusseldorf]: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
  [Locations.Hamburg]: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  }
} as const;

export const TileLayerPattern = {
  URL: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
} as const;

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export enum NameSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Favorite = 'FAVORITE',
  Comments = 'COMMENTS',
  User = 'USER',
}

export enum StatusLoading {
  None,
  Loading,
  Success,
  Failed,
}

