import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/selectors/selectors';

type PrivateRouteProps = {
  isReverse?: boolean;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const {isReverse, children} = props;

  return (
    authorizationStatus === (
      isReverse
        ? AuthorizationStatus.NoAuth
        : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoute.Main : AppRoute.Login} />
  );
}

export default PrivateRoute;
