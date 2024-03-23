import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { Reviews } from './mock/reviews';
import { Favorites } from './mock/favorites';
import { store } from './store';
import { fetchOfferListAction } from './store/api-actions';

store.dispatch(fetchOfferListAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={Reviews}
        favorites={Favorites}
      />
    </Provider>
  </React.StrictMode>
);
