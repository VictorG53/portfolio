import { AppWrapper } from '../components/useContext';
import '../styles/globals.css';
import React from 'react'



function MyApp({ Component, pageProps }) {

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
