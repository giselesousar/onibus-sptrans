import React from 'react';

import Footer from './Footer';
import Topbar from './Topbar';

export default function Main(props){

  const { children } = props;

  return (
    <div>
      <Topbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

