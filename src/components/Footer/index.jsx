import logoFooter from '../../assets/logo_footer.png';
import './index.css';
function Footer() {
      return (
            <section className="footer">
                  <div className="footer-content">
                        <img src={logoFooter} alt="Logo footer" />
                        <h1>® 2020 Kasa. All rights reserverd</h1>
                  </div>
            </section>
      );
}

export default Footer;
