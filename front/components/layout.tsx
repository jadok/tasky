import React from 'react';
import Image from 'next/image';

import ThemeSwitcher from './theme';

import './home.module.scss';

const Layout = ({ children }): JSX.Element => (
  <div className="container">
    <header>
      <Image src="/sample-logo-task.png" height={100} width={100} alt={"Logo"} />
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
