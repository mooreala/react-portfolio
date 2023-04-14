import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as Arrow } from '../img/arrow-svg.svg';

function ScrollButton() {
  return (
    <ScrollToTop
      smooth
      component={<Arrow />}
    />
  );
}

export default ScrollButton;