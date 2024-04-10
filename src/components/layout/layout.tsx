import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getLayoutState } from '../../utils';
import { selectFavorites } from '../../store/favorites-process/favorites-process.selectors';
import MemorizedFooter from './footer';
import MemorizedHeader from './header';

function Layout () : JSX.Element {
  const {pathname} = useLocation();
  const favorites = useAppSelector(selectFavorites);
  const {rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter} = getLayoutState(pathname as AppRoute, favorites);

  return (
    <div className={`page${rootClassName}`}>
      <MemorizedHeader
        linkClassName={linkClassName}
        shouldRenderUser={shouldRenderUser}
      />
      <Outlet />
      {shouldRenderFooter && <MemorizedFooter/>}
    </div>
  );
}

export default Layout;
