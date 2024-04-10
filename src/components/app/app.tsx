import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus, StatusLoading } from '../../const';
import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import FavoritesPage from '../../pages/favorites-page';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import Layout from '../layout/layout';
import ScrollToTop from '../scroll-to-top';
import PrivateRoute from '../private-route/private-route';
import Loader from '../loader/loader';
import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { selectStatusLoading } from '../../store/offers-process/offers-process.selectors';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const statusLoading = useAppSelector(selectStatusLoading);

  if(authorizationStatus === AuthorizationStatus.Unknown || statusLoading === StatusLoading.Loading) {
    return (
      <Loader />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route
              index
              element={<MainPage/>}
            />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute isReverse>
                  <LoginPage/>
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer}>
              <Route
                path=':id'
                element={<OfferPage />}
              />
            </Route>
            <Route
              path='*'
              element={<NotFoundPage/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
