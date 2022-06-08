import './index.css';
function InfoAccommodation(contentAccommodation) {
      const { title, infoTitle } = contentAccommodation;

      return (
            <div className="card-content">
                  <div>
                        <h1 className="title-of-accommodation">{title}</h1>
                        <small className="legende-accommodation">
                              {infoTitle}
                        </small>
                  </div>
            </div>
      );
}
export default InfoAccommodation;
