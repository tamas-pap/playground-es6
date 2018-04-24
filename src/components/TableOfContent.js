import React from 'react';
import { NavLink } from 'react-router-dom';
import './TableOfContent.css';

const TableOfContent = ({ isOpen, close }) => (
  <div className={`tableOfContent ${isOpen ? 'is-open' : ''}`} onMouseLeave={close}>
    <NavLink className="tableOfContent-item" to="/variable-declaration">
      1. Variable declaration
    </NavLink>
    <NavLink className="tableOfContent-item" to="/arrow-functions">
      2. Arrow functions
    </NavLink>
    <NavLink className="tableOfContent-item" to="/string-literals">
      3. String literals
    </NavLink>
    <NavLink className="tableOfContent-item" to="/destrucuturing">
      4. Destructuring
    </NavLink>
    <NavLink className="tableOfContent-item" to="/spread-and-rest">
      5. Spread and rest
    </NavLink>
    <NavLink className="tableOfContent-item" to="/promises">
      6. Promises
    </NavLink>
    <NavLink className="tableOfContent-item" to="/symbols">
      7. Symbols
    </NavLink>
    <NavLink className="tableOfContent-item" to="/classes">
      8. Classes
    </NavLink>
    <NavLink className="tableOfContent-item" to="/generators">
      9. Generators
    </NavLink>
    <NavLink className="tableOfContent-item" to="/proxies">
      10. Proxies
    </NavLink>
    <NavLink className="tableOfContent-item" to="/sets-and-weaksets">
      11. Sets and WeakSets
    </NavLink>
    <NavLink className="tableOfContent-item" to="/maps-and-weakmaps">
      12. Maps and WeakMaps
    </NavLink>
    <NavLink className="tableOfContent-item" to="/async-await">
      13. Async/Await
    </NavLink>
  </div>
);

export default TableOfContent;
