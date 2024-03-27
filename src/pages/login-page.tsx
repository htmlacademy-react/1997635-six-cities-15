import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { Helmet } from 'react-helmet-async';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { loginAction } from '../store/api-actions';

function LoginPage () {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(login !== '' && password !== '') {
      dispatch(loginAction({
        login: login,
        password: password
      }));
    }
  };

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#" method="post"
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(evt) => setLogin(evt.target.value)}
                required
                value={login}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(evt) => setPassword(evt.target.value)}
                required
                value={password}
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
            >Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoute.Main}>
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
