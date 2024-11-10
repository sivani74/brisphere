import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <Link className="route-link" to="/">
        Brisphere
      </Link>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/discover">
          Discover
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/services">
          Services
        </Link>
      </li>
      <li className="title link-item">About us</li>
    </ul>
  </nav>
)

export default Header
