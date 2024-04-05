import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { memo } from 'react';

type LogoProps = {
  linkClassName: string;
  isHeader: boolean;
}

function Logo ({linkClassName, isHeader} : LogoProps) : JSX.Element {
  return (
    <Link to={AppRoute.Main} className={`${isHeader ? 'header' : 'footer'}__logo-link${linkClassName}`}>
      <img
        className={`${isHeader ? 'header' : 'footer'}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={81}
        height={41}
      />
    </Link>
  );
}

const MemorizedLogo = memo(Logo);

export default MemorizedLogo;
