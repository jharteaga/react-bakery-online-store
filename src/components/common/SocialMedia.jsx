import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function SocialMedia(props) {
  return (
    <div className="social-media">
      <InstagramIcon className="icon" />
      <FacebookIcon className="icon" />
      <TwitterIcon className="icon" />
    </div>
  );
}

export default SocialMedia;
