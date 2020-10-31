import React from 'react';

// import Logo from '../../components/Logo';
import ThemeSwitcher from './theme';

import './home.module.scss';

const Layout = ({ children }): JSX.Element => (
  <div className="container">
    <header>
      <ThemeSwitcher />
    </header>
    <nav>Navigation</nav>
    <main>
      {children}
    </main>
    <aside>Related links</aside>
    <footer>Footer</footer>
  </div>
);

export default Layout;
