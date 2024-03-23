import { HousingTypes, Locations } from '../const';

export type TCityOffer = {
  name: keyof typeof Locations;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
};

export type TLocationOffer = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TOffer = {
  id: string;
  title: string;
  type: keyof typeof HousingTypes;
  price: number;
  city: TCityOffer;
  location: TLocationOffer;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type TAdditionalOptions = {
  description: string;
  bedrooms: number;
  goods: [string];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: [string];
  maxAdults: number;
};

export type TFullOffer = TOffer & TAdditionalOptions;
