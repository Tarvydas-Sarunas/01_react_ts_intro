import { useState } from 'react';

function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <h2>LoggedIn</h2>
      <button onClick={handleLogin} className='btn btn-secondary'>
        Login
      </button>
      <button onClick={handleLogout} className='btn btn-primary'>
        Logout
      </button>

      <h2>User is logged {isLoggedIn ? 'in' : 'out'}</h2>
    </div>
  );
}

export default LoggedIn;
