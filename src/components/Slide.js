import React, { Component } from 'react';
import Header from './Header';
import TableOfContent from './TableOfContent';

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
      </div>
    );
  }
}

export default Slide;
