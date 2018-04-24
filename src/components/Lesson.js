import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import './Lesson.css';

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: undefined,
    };
  }

  componentDidMount() {
    const { lesson } = this.props;
    fetch(lesson)
      .then(response => response.text())
      .then(text =>
        this.setState({
          lesson: text,
        }),
      );
  }

  render() {
    const { lesson } = this.state;

    if (!lesson) return null;

    return <ReactMarkdown className="lesson" source={this.state.lesson} renderers={{ code: CodeBlock }} />;
  }
}

export default Lesson;
