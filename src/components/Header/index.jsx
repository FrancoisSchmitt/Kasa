import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import './index.css';
function Header() {
      return (
            <section className="header">
                  <ul>
                        <li>
                              <img src={logo} alt="Logo header" />
                        </li>
                  </ul>
                  <div className="link">
                        <NavLink
                              to="/"
                              className="nav-link link-footer home-footer"
                              activeclassname="selected"
                        >
                              Accueil
                        </NavLink>
                        <NavLink
                              to="/about"
                              className="nav-link link-footer about-footer"
                              activeclassname="selected"
                        >
                              A Propos
                        </NavLink>
                  </div>
            </section>
      );
}
export default Header;
