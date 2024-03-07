import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import { Offers } from './mock/offers';
import { Reviews } from './mock/reviews';
import { Favorites } from './mock/favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={Setting.OffersCount}
      offers={Offers}
      reviews={Reviews}
      favorites={Favorites}
    />
  </React.StrictMode>
);
