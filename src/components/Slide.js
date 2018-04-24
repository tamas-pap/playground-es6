import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Playground from './Playground';
import Lesson from './Lesson';
import lessons from '../lessons/lessons';
import './Slide.css';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarVisible: false,
    };
  }

  openSidebar = () => {
    this.setState({
      isSidebarVisible: true,
    });
  };

  closeSidebar = () => {
    this.setState({
      isSidebarVisible: false,
    });
  };

  render() {
    const {
      location: { pathname },
    } = this.props;

    const lessonId = pathname.substring(1);
    const lesson = lessons.find(lesson => lesson.id === lessonId);
    const lessonIndex = lessons.indexOf(lesson);
    const previousLessonIndex = lessonIndex > 0 ? lessonIndex - 1 : undefined;
    const nextLessonIndex = lessonIndex < lessons.length - 1 ? lessonIndex + 1 : undefined;
    const previousLesson = previousLessonIndex >= 0 ? lessons[previousLessonIndex] : undefined;
    const nextLesson = nextLessonIndex >= 0 ? lessons[nextLessonIndex] : undefined;

    return (
      <div className="slide">
        <Header
          openSidebar={this.openSidebar}
          lesson={lesson}
          previousLesson={previousLesson}
          nextLesson={nextLesson}
        />

        <Sidebar isOpen={this.state.isSidebarVisible} close={this.closeSidebar} />

        <div className="slide-content">
          <Playground codeSandboxId={lesson.codeSandboxId} />
          <Lesson lessonId={lesson.id} />
        </div>
      </div>
    );
  }
}

export default withRouter(Slide);
