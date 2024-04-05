import { memo } from 'react';
import Navigation from './navigation/navigation';
import MemorizedLogo from '../ui/logo';

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
            <MemorizedLogo linkClassName={linkClassName} isHeader/>
          </div>
          {shouldRenderUser && <Navigation />}
        </div>
      </div>
    </header>
  );
}

const MemorizedHeader = memo(Header);

export default MemorizedHeader;
