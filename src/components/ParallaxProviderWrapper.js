'use client';

import { ParallaxProvider } from 'react-scroll-parallax';

const ParallaxProviderWrapper = ({ children }) => {
  return (
    <ParallaxProvider>
      <br/>
      <br/>
      {children}
      <br/>
      <br/>
    </ParallaxProvider>
  );
};

export default ParallaxProviderWrapper;