import { Link } from 'react-router-dom';
import { AppRoute, ErrorMessages } from '../const';
import { Helmet } from 'react-helmet-async';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { loginAction } from '../store/api-actions';
import { checkLogin, checkPassword, getRandomCity } from '../utils';
import { toast } from 'react-toastify';
import { changeCity } from '../store/offers-process/offers-process.slice';

function LoginPage () {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  const currentCity = getRandomCity();

  dispatch(changeCity(currentCity));

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const checkPasswordValue = checkPassword(password);
    const checkLoginValue = checkLogin(login);

    if(!checkPasswordValue){
      toast.warn(ErrorMessages.Password);
    }

    if(!checkLoginValue){
      toast.warn(ErrorMessages.Login);
    }

    if(checkPasswordValue && checkLoginValue) {
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
              <span>{currentCity}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
