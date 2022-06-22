import { useParams, UseNavigate, Navigate } from 'react-router-dom';
import logements from '../../data/logements.json';
import Dropdown from '../../components/Dropdown';
import InfoUserCard from '../../components/InfoUserCard';
import Tag from '../../components/Tag';
import InfoAccommodation from '../../components/InfoAccommodation';
import './index.css';
import Stars from '../../components/Stars';
import Slider from '../../components/Slider';
import { useEffect } from 'react';

function Accomodation() {
      const id = useParams();
      // const navigate = useNavigate();
      const accommodation = logements.find((logement) => logement.id === id.id);
      // useEffect(()=>{
      //       const navigate = UseNavigate();
      //       if(!accommodation)
      //       {
      //             navigate("/404")
      //       }
      // },[])

      return (
            <>
                  {accommodation ? (
                        <section className="accommodation-section">
                              <Slider pictures={accommodation.pictures} />
                              <div className="accommodation">
                                    <div className="container-accommodation">
                                          <InfoAccommodation
                                                title={accommodation.title}
                                                infoTitle={
                                                      accommodation.location
                                                }
                                          />
                                          <div className="tagsSection">
                                                {accommodation.tags.map(
                                                      (tag, index) => (
                                                            <Tag
                                                                  key={`tag-${index}`}
                                                                  tagName={tag}
                                                            />
                                                      )
                                                )}
                                          </div>
                                    </div>
                                    <div className="card-rating">
                                          <InfoUserCard
                                                nameUser={
                                                      accommodation.host.name
                                                }
                                                imageUser={
                                                      accommodation.host.picture
                                                }
                                                tags={accommodation.tags}
                                          />
                                          <Stars
                                                EventStars={
                                                      accommodation.rating
                                                }
                                          />
                                    </div>
                              </div>
                              <div className="accommodation-dropdown-content">
                                    <div className="accomodationDropdowns">
                                          <Dropdown
                                                title="Description"
                                                content={
                                                      accommodation.description
                                                }
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
                                                                  <li>
                                                                        {
                                                                              equipment
                                                                        }
                                                                  </li>
                                                            </ul>
                                                      )
                                                )}
                                          />
                                    </div>
                              </div>
                        </section>
                  ) : (
                        <Navigate replace to="/404" />
                  )}
            </>
      );
}

export default Accomodation;

// useEffect(()=>{
// if (!id == newId.id){
//     console.log(newId.id + "lol")
//     navigate("/404")
// }
// console.log('coucou')
// },[])
