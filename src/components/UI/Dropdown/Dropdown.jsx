import "./Dropdown.css";
import { useState } from "react";


function Dropdown({ buttonLabel = "⋮", children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-anchor">
        <div className="dropdown-body">
          <button
            className={`dropdown-button ${isOpen ? "activBtn" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {buttonLabel}
          </button>

          <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
            <div className="togContHeader">
              <button className="dropdown-button activBtn" onClick={() => setIsOpen(false)}>
                {buttonLabel}
              </button>
              <h1 className="titleOption">Опции</h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown