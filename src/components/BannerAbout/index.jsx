import logo from '../../assets/about.png';
import './index.css';

function BannerAbout() {
      return (
            <div className="bannerAbout">
                  <div className="banner-info">
                        <img
                              src={logo}
                              alt="img banner"
                              className="image-banner"
                        />
                  </div>
            </div>
      );
}
export default BannerAbout;
