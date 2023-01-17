import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import { useAppDispatch } from '../hooks';

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import { getThemeConfig } from '../features/config/configSlice';


type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getThemeConfig());
  }, [dispatch])

  return (
    <React.Fragment>
      <Header />
        {children}
      <Footer />
    </React.Fragment>
  )
}
