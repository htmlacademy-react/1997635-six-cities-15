const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
const EMAIL_AUTH_KEY_NAME = 'email-auth';

export type Token = string;
export type Email = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const getUserEmail = (): Email => {
  const email = localStorage.getItem(EMAIL_AUTH_KEY_NAME);
  return email ?? '';
};

export const saveToken = (token: Token, email: Email): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
  localStorage.setItem(EMAIL_AUTH_KEY_NAME, email);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
  localStorage.removeItem(EMAIL_AUTH_KEY_NAME);
};
