import './index.css';
function InfoUserCard(ContentCard) {
      const { title, infoTitle, nameUser, imageUser, imageName } = ContentCard;

      return (
            <div>
                  <div className="userInfo">
                        <h2> {nameUser}</h2>
                        <img src={imageUser} alt={imageName} />
                  </div>
            </div>
      );
}
export default InfoUserCard;
