import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import FavoritesPage from '../../pages/favorites-page';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import Layout from '../layout/layout';
import ScrollToTop from '../scroll-to-top';
import PrivateRoute from '../private-route/private-route';
import { getAuthorizationStatus } from '../../mock/getAuthorizationStatus';

type AppScreenProps = {
  offersCount: number;
}

function App({offersCount}: AppScreenProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout/>}>
          <Route
            index
            element={<MainPage offersCount={offersCount}/>}
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
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer}>
            <Route
              path=':id'
              element={<OfferPage/>}
            />
          </Route>
        </Route>
        <Route
          path='*'
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
