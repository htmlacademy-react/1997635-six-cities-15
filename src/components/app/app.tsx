import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import FavoritesPage from '../../pages/favorites-page';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import Layout from '../layout/layout';
import ScrollToTop from '../scroll-to-top';
import PrivateRoute from '../private-route/private-route';
import Loader from '../loader/loader';
import { getAuthorizationStatus } from '../../mock/getAuthorizationStatus';
import type { TOffer } from '../../types/offers';
import type { TReview } from '../../types/reviews';
import { useAppSelector } from '../../hooks';

type AppScreenProps = {
  reviews: TReview[];
  favorites: TOffer[];
}

function App({reviews, favorites}: AppScreenProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if(isDataLoading) {
    return (
      <Loader />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout favorites={favorites}/>}>
            <Route
              index
              element={<MainPage/>}
            />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                  <LoginPage/>
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage favorites={favorites}/>
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer}>
              <Route
                path=':id'
                element={<OfferPage reviews={reviews}/>}
              />
            </Route>
          </Route>
          <Route
            path='*'
            element={<NotFoundPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
