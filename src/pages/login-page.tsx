import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../hooks';
import { getRandomCity } from '../utils';
import { changeCity } from '../store/offers-process/offers-process.slice';
import LoginForm from '../components/login-form/login-form';

function LoginPage () {
  const dispatch = useAppDispatch();

  const currentCity = getRandomCity();

  dispatch(changeCity(currentCity));

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm />
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoute.Main}>
              <span>{currentCity}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
