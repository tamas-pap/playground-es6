import React from 'react';
import './Playground.css';

const Playground = ({ embedId }) => (
  <iframe
    title="playground"
    className="playground"
    src={`https://codesandbox.io/embed/${embedId}?autoresize=1&fontsize=14&view=split`}
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  />
);

export default Playground;
