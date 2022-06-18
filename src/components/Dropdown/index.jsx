import { useState } from 'react';
import './index.css';
import arrayDown from '../../assets/array-down.svg';
import arrayUp from '../../assets/array-up.svg';
function Dropdown(nextProps) {
      const { title, content } = nextProps;
      const [isListOpen, setIsListOpen] = useState(false);

      return isListOpen ? (
            <div className="dropdown-content">
                  <div
                        className="title-dropdown"
                        onClick={() => {
                              setIsListOpen(false);
                        }}
                  >
                        <h2>{title}</h2>
                        <img src={arrayUp} alt="arrayUp" className="array-Up" />
                  </div>
                  <div className="dropdown-container-content">
                        <div>{content}</div>
                  </div>
            </div>
      ) : (
            <div className="dropdown-content">
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

export default Dropdown;
