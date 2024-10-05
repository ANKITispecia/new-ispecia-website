'use client';

import { ParallaxProvider } from 'react-scroll-parallax';

const ParallaxProviderWrapper = ({ children }) => {
  return (
    <div style={{ position: "" }}>
    <ParallaxProvider>
      <br/>
      <br/>
      {children}
      <br/>
      <br/>
    </ParallaxProvider>
    </div>
  );
};

export default ParallaxProviderWrapper;