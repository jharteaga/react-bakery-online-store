import { useEffect } from 'react';

function Logout(props) {
  useEffect(() => {
    localStorage.removeItem('currentUser');
    window.location = '/';
  });

  return null;
}

export default Logout;
