import Logo from '../ui/logo';
import Navigation from './navigation/navigation';

type HeaderProps = {
  linkClassName: string;
  shouldRenderUser: boolean;
}

function Header ({linkClassName, shouldRenderUser} : HeaderProps) : JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo linkClassName={linkClassName} isHeader/>
          </div>
          {shouldRenderUser && <Navigation />}
        </div>
      </div>
    </header>
  );
}

export default Header;
