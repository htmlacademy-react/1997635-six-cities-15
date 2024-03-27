import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { Reviews } from './mock/reviews';
import { Favorites } from './mock/favorites';
import { store } from './store';
import { checkAuthAction, fetchOfferListAction } from './store/api-actions';
import 'react-toastify/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

store.dispatch(fetchOfferListAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App
        reviews={Reviews}
        favorites={Favorites}
      />
    </Provider>
  </React.StrictMode>
);
