import { FC, ReactNode } from 'react';
import { Container } from 'semantic-ui-react';

// components
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

// import styles from './layout.module.css';
// CSS Module - CSS-in-JS - PostCSS

type LayoutProps = {
  children?: ReactNode;
};

const Layout: FC = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container as='main' text>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
