import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from './header';
import Footer from './footer';
import { TOffer } from '../../types/offers';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  if (pathname === AppRoute.Main) {
    rootClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = ' page--gray page--login';
    shouldRenderUser = false;
  } else if (pathname === AppRoute.Favorites){
    shouldRenderFooter = true;
  }

  return {rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter};
};

type LayoutProps = {
  favorites: TOffer[];
}

function Layout ({favorites} : LayoutProps) : JSX.Element {
  const {pathname} = useLocation();
  const {rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter} = getLayoutState(pathname as AppRoute);

  return (
    <div className={`page${rootClassName}`}>
      <Header
        linkClassName={linkClassName}
        shouldRenderUser={shouldRenderUser}
        favorites={favorites}
      />
      <Outlet />
      {shouldRenderFooter && <Footer/>}
    </div>
  );
}

export default Layout;
