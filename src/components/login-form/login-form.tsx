import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { checkLogin, checkPassword } from '../../utils';
import { toast } from 'react-toastify';
import { ErrorMessages } from '../../const';
import { loginAction } from '../../store/api-actions';

function LoginForm () {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

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
  );
}

export default LoginForm;
