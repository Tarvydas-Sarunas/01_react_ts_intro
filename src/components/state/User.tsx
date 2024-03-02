import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};
//
const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: 'James',
      email: 'james@mail.com',
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <h2>LoggedIn</h2>
      <button onClick={handleLogin} className='btn btn-secondary me-2'>
        Login
      </button>
      <button onClick={handleLogout} className='btn btn-info me-2'>
        Logout
      </button>
      {user !== null && (
        <div className='card'>
          <div className='card-body'>
            <h2>User name is {user?.name} </h2>
            <h2>User email is {user?.email}</h2>
          </div>
        </div>
      )}
      {user === null && <div className='alert alert-info'>You have been logged out</div>}
    </div>
  );
};

export default User;
