import { TOffer } from '../../types/offers';
import Logo from '../ui/logo';
import Navigation from './navigation/navigation';

type HeaderProps = {
  linkClassName: string;
  shouldRenderUser: boolean;
  favorites: TOffer[];
}

function Header ({linkClassName, shouldRenderUser, favorites} : HeaderProps) : JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo linkClassName={linkClassName} isHeader/>
          </div>
          {shouldRenderUser && <Navigation favorites={favorites}/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
