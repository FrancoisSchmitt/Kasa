// import '../../data/logements.json'
import logements from '../../data/logements.json';
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';
import './index.css';
function getAllAccomodation() {
      return logements.map((logement) => {
            return {
                  cover: logement.cover,
                  title: logement.title,
                  id: logement.id,
            };
      });
}
function Home() {
      return (
            <section className="Home">
                  <Banner />
                  <div className="gallery-background">
                        <div className="gallery">
                              {getAllAccomodation().map((logement, index) => (
                                    <Link
                                          key={`accommodation-${index}`}
                                          to={`/accommodation/${logement.id}`}
                                          className="gallery-link"
                                    >
                                          <Card
                                                cover={logement.cover}
                                                title={logement.title}
                                                id={logement.id}
                                                key={logement.id}
                                          />
                                    </Link>
                              ))}
                        </div>
                  </div>
            </section>
      );
}

export default Home;
