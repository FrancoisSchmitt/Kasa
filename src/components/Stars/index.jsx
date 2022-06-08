import StarsFill from '../../assets/fillStars.svg';
import StarsEmpty from '../../assets/emptyStars.svg';

function Stars({ EventStars }) {
      const rate = [];
      for (let i = 1; i <= 5; i++) {
            rate.push(i <= EventStars);
      }

      return (
            <ul className="rating">
                  {rate.map((star, index) => (
                        <li className="star" key={`star-${index}`}>
                              <img
                                    src={star ? StarsFill : StarsEmpty}
                                    alt={star ? 'Star full' : 'Star empty'}
                              />
                        </li>
                  ))}
            </ul>
      );
}

export default Stars;
