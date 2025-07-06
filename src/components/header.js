import React from 'react';
import logo from '../user.png';
import logout from '../Logout.png'

export default function Header() {
  const [login, setLogin] = React.useState(false);

  return (
    <div className="header">
      <h1 className="heading">SoftPay- Personal Finances</h1>

      <div className="avatar-wrapper" onClick={() => setLogin(!login)}>
        <img className="header-img" src={logo} alt="user" />
        <span className="avatar-label">User</span>

        {login && (
          <div className="dropdown">
            <ul>
              <li onClick={() => alert("logging out!")}>Log Out
                <img className="logout-img" src={logout} alt="logimg"></img>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
