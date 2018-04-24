import React, { Component } from 'react';
import Header from './Header';
import TableOfContent from './TableOfContent';
import Playground from './Playground';
import Lesson from './Lesson';
import './Slide.css';
import lesson from '../lessons/variable-declaration.md';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTableOfContentVisible: false,
    };
  }

  openTableOfContent = () => {
    this.setState({
      isTableOfContentVisible: true,
    });
  };

  closeTableOfContent = () => {
    this.setState({
      isTableOfContentVisible: false,
    });
  };

  render() {
    return (
      <div className="slide">
        <Header openTableOfContent={this.openTableOfContent} />
        <TableOfContent isOpen={this.state.isTableOfContentVisible} close={this.closeTableOfContent} />
        <div className="slide-content">
          <Playground embedId="5ynqqk03n4" />
          <Lesson lesson={lesson} />
        </div>
      </div>
    );
  }
}

export default Slide;
