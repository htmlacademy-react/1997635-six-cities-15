import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from './header';
import Footer from './footer';
import { useAppSelector } from '../../hooks';
import { selectFavorites } from '../../store/selectors/selectors';
import { getLayoutState } from '../../utils';

function Layout () : JSX.Element {
  const {pathname} = useLocation();
  const favorites = useAppSelector(selectFavorites);
  const {rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter} = getLayoutState(pathname as AppRoute, favorites);

  return (
    <div className={`page${rootClassName}`}>
      <Header
        linkClassName={linkClassName}
        shouldRenderUser={shouldRenderUser}
      />
      <Outlet />
      {shouldRenderFooter && <Footer/>}
    </div>
  );
}

export default Layout;
