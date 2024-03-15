import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { Setting } from './const';
import { Reviews } from './mock/reviews';
import { Favorites } from './mock/favorites';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offersCount={Setting.OffersCount}
        reviews={Reviews}
        favorites={Favorites}
      />
    </Provider>
  </React.StrictMode>
);
