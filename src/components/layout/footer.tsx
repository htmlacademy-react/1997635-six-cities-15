import Logo from '../ui/logo';

type FooterProps = {
  shouldRenderFooter: boolean;
}

function Footer ({shouldRenderFooter} : FooterProps) {
  if (shouldRenderFooter){
    return (
      <footer className="footer container">
        <Logo
          isHeader={false}
          linkClassName=''
        />
      </footer>
    );
  }
}

export default Footer;
