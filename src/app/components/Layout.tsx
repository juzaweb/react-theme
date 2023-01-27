import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <Header />
        {children}
      <Footer />
    </React.Fragment>
  )
}
