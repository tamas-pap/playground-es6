import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import './Lesson.css';

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessonContent: undefined,
    };
  }

  componentDidMount() {
    const { lessonId } = this.props;
    this.loadLesson(lessonId);
  }

  componentWillReceiveProps({ lessonId }) {
    this.loadLesson(lessonId);
  }

  loadLesson = lessonId => {
    import(`../lessons/${lessonId}.md`)
      .then(absoluteLessonPath => fetch(absoluteLessonPath))
      .then(response => response.text())
      .then(lessonContent =>
        this.setState({
          lessonContent,
        }),
      );
  };

  render() {
    const { lessonContent } = this.state;
    return lessonContent ? (
      <ReactMarkdown className="lesson" source={this.state.lessonContent} renderers={{ code: CodeBlock }} />
    ) : null;
  }
}

export default Lesson;
