import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ openSidebar, lesson, previousLesson, nextLesson }) => (
  <div className="header">
    <div className="header-actions">
      <button className="header-action header-action--menuOpen" onClick={openSidebar} />
      {previousLesson && (
        <Link className="header-action header-action--previous" to={`/${previousLesson.id}`}>
          {previousLesson.title}
        </Link>
      )}
    </div>

    <h1 className="header-title">{lesson.title}</h1>

    <div className="header-actions">
      {nextLesson && (
        <Link className="header-action header-action--next" to={`/${nextLesson.id}`}>
          {nextLesson.title}
        </Link>
      )}
    </div>
  </div>
);

export default Header;
