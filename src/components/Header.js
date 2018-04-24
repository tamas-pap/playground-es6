import React from 'react';
import './Header.css';

const Header = ({ openTableOfContent }) => (
  <div className="header">
    <div className="header-actions">
      <button className="header-action header-action--menuOpen" onClick={openTableOfContent} />
      <a className="header-action header-action--previous" href="#hello">
        Previous
      </a>
    </div>

    <h1 className="header-title">Introduction to JSX</h1>

    <div className="header-actions">
      <a className="header-action header-action--next" href="#hello">
        Next
      </a>
    </div>
  </div>
);

export default Header;
