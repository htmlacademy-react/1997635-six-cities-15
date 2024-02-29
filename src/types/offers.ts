export type Offer = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  city: {
    name: 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
      };
    };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
