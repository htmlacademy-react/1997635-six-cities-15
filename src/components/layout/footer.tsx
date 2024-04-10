import { memo } from 'react';
import MemorizedLogo from '../ui/logo';

function Footer () {
  return (
    <footer className="footer container">
      <MemorizedLogo
        isHeader={false}
        linkClassName=''
      />
    </footer>
  );
}

const MemorizedFooter = memo(Footer);

export default MemorizedFooter;
