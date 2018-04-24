import React from 'react';
import { NavLink } from 'react-router-dom';
import lessons from '../lessons/lessons';
import './Sidebar.css';

const sidebar = ({ isOpen, close }) => (
  <div className={`sidebar ${isOpen ? 'is-open' : ''}`} onMouseLeave={close}>
    {lessons.map(lesson => (
      <NavLink className="sidebar-item" to={`/${lesson.id}`} key={lesson.id}>
        {lesson.title}
      </NavLink>
    ))}
  </div>
);

export default sidebar;
