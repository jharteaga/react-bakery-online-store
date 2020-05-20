import { useEffect } from 'react';

function Logout(props) {
  useEffect(() => {
    localStorage.removeItem('currentUser');
    window.location = '/react-bakery-online-store';
  });

  return null;
}

export default Logout;
