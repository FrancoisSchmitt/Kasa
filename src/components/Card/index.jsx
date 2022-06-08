import './index.css';
function Card(props) {
      return (
            <article>
                  <div className="card-info">
                        <div className="linear-image"></div>
                        <img
                              className="image-acco"
                              src={props.cover}
                              alt={props.title}
                        />
                        <h2 className="title-card">{props.title}</h2>
                  </div>
            </article>
      );
}

export default Card;
