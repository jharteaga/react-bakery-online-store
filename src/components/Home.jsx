import React from 'react';
import SlideShow from './common/SlideShow';
import SocialMedia from './common/SocialMedia';

function Home(props) {
  return (
    <React.Fragment>
      <h1>The Sweetest Place in America!</h1>
      <SlideShow />
      <SocialMedia />
    </React.Fragment>
  );
}

export default Home;
