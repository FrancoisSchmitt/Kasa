import './index.css';
import { NavLink } from 'react-router-dom';
function Error() {
      return (
            <section>
                  <div className="error-content">
                        <h1 className="error-404">404</h1>
                        <h2 className="error-404-information">
                              Oups! La page demandez n'existe pas.
                        </h2>
                  </div>
                  <NavLink
                        to="/"
                        className={(isActive) =>
                              'nav-link Error-return-menu' +
                              (!isActive ? ' unselected' : '')
                        }
                  >
                        Retourner sur la page d'acceuil
                  </NavLink>
            </section>
      );
}
export default Error;
