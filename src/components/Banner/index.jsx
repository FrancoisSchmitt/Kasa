import './index.css';
import banner from '../../assets/IMG.png';

function Banner() {
      return (
            <div className="banner">
                  <div className="banner-info">
                        <img
                              src={banner}
                              alt="img banner"
                              className="image-banner"
                        />
                        <h1 className="title-banner">
                              Chez vous, partout et ailleurs
                        </h1>
                  </div>
            </div>
      );
}

export default Banner;
