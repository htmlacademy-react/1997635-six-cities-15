import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { Helmet } from 'react-helmet-async';

function NotFoundPage () {
  return (
    <main className="page__main page__main--favorites .page__main--offer page__main--favorites-empty">
      <Helmet>
        <title>6 cities: not found</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <div className="favorites__status-wrapper">
            <b className="favorites__status">404 Not Found</b>
            <p className="favorites__status-description">
              <Link to={AppRoute.Main}>Go to home page</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NotFoundPage;

