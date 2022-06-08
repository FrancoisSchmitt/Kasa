import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../../data/logements.json';
import DropdownAccommodation from '../../components/DropdownAccommodation';
import InfoUserCard from '../../components/InfoUserCard';
import Tag from '../../components/Tag';
import InfoAccommodation from '../../components/InfoAccommodation';
import './index.css';
import Stars from '../../components/Stars';
import Slider from '../../components/Slider';

function getAccomodationById(id) {
      return logements.filter((logement) => logement.id === id)[0];
}

function Accomodation() {
      const { id } = useParams();
      const navigate = useNavigate();
      const accommodation = getAccomodationById(id);
      // console.log(accommodation);
      useEffect(() => {
            if (id === accommodation.id) {
                  navigate(accommodation);
            }
            // console.log('coucou');
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

                  <div className="accomodationDropdowns">
                        <DropdownAccommodation
                              title="Description"
                              content={accommodation.description}
                              className="lolasa"
                        />

                        <DropdownAccommodation
                              title="Équipements"
                              content={accommodation.equipments.map(
                                    (equipment, index) => (
                                          <div
                                                key={`equipment-${index}`}
                                                className="accommodation-content-equipment"
                                          >
                                                {equipment}
                                          </div>
                                    )
                              )}
                        />
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
