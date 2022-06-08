import { useState } from 'react';
import arrayDown from '../../assets/array-down.svg';
import arrayUp from '../../assets/array-up.svg';
import './index.css'
function DropdownAccommodation(nextProps) {
      const { title, content } = nextProps;
      const [isListOpen, setIsListOpen] = useState(false);

      return isListOpen ? (
            <div className="dropdown-content-accommodation">
                  <div
                        className="title-dropdown"
                        onClick={() => {
                              setIsListOpen(false);
                        }}
                  >
                        <h2>{title}</h2>
                        <img src={arrayUp} alt="arrayUp" className="array-Up" />
                  </div>
                  <div className="dropdown-container-accommodation">
                        <div>{content}</div>
                  </div>
            </div>
      ) : (
            <div className="dropdown-content-accommodation">
                  <div
                        className="title-dropdown"
                        onClick={() => {
                              setIsListOpen(true);
                        }}
                  >
                        <h2>{title}</h2>
                        <img
                              src={arrayDown}
                              alt="arrayDown"
                              className="array-down"
                        />
                  </div>
            </div>
      );
}
export default DropdownAccommodation;
