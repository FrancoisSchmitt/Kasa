import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../../data/logements.json';
import Dropdown from '../../components/Dropdown';
import InfoUserCard from '../../components/InfoUserCard';
import Tag from '../../components/Tag';
import InfoAccommodation from '../../components/InfoAccommodation';
import './index.css';
import Stars from '../../components/Stars';
import Slider from '../../components/Slider';

function getAccomodation(id) {
      return logements.filter((logement) => logement.id === id)[0];
}

function Accomodation() {
      const { id } = useParams();
      const navigate = useNavigate();
      const accommodation = getAccomodation(id);

      useEffect(() => {
            // if (id === 'c67ab8a7') {
            //       console.log(id + "ceci est l'id que je recherche ");
            //       console.log(accommodation.id + "ceci est l'id de mon fichier json");
            //       console.log(accommodation); //renvoie le tableau de donnée en fonction de l'id trouvé
            // }
            // else  {
            //       navigate('/404');
            // }
      }, []);

      return (
            <section className="accommodation-section">
                  <Slider pictures={accommodation.pictures} />
                  <div className="accommodation">
                        <div className="container-accommodation">
                              <InfoAccommodation
                                    title={accommodation.title}
                                    infoTitle={accommodation.location}
                              />
                              <div className="tagsSection">
                                    {accommodation.tags.map((tag, index) => (
                                          <Tag
                                                key={`tag-${index}`}
                                                tagName={tag}
                                          />
                                    ))}
                              </div>
                        </div>
                        <div className="card-rating">
                              <InfoUserCard
                                    nameUser={accommodation.host.name}
                                    imageUser={accommodation.host.picture}
                                    tags={accommodation.tags}
                              />
                              <Stars EventStars={accommodation.rating} />
                        </div>
                  </div>
                  <div className="accommodation-dropdown-content">
                        <div className="accomodationDropdowns">
                              <Dropdown
                                    title="Description"
                                    content={accommodation.description}
                                    className="lolasa"
                              />

                              <Dropdown
                                    title="Équipements"
                                    content={accommodation.equipments.map(
                                          (equipment, index) => (
                                                <ul
                                                      key={`equipment-${index}`}
                                                      className="accommodation-content-equipment"
                                                >
                                                      <li>{equipment}</li>
                                                </ul>
                                          )
                                    )}
                              />
                        </div>
                  </div>
            </section>
      );
}
export default Accomodation;

// if (!id == newId.id){
//     console.log(newId.id + "lol")
//     navigate("/404")
// }
// console.log('coucou')
// },[])
