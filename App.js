import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import logo from './logo.png';

// Element using React.createElement
/*
const Heading1 = React.createElement(
  'h1',
  { key: 'h1', className: 'heading1' },
  'Nested header Heading 1'
);

const Heading2 = React.createElement(
  'h2',
  { key: 'h2', className: 'heading2' },
  'Nested header heading 2'
);

const Header = React.createElement('div', { className: 'title' }, [
  Heading1,
  Heading2,
  React.createElement(
    'h3',
    { key: 'h3', className: 'heading3' },
    'Nested header heading 3'
  ),
]);

*/

// Same Element using JSX

const Heading1 = <h1 key="h1">JSX Heading 1</h1>;
const Heading2 = () => {
  return <h2 key="h2">JSX Heading 2</h2>;
};
const Heading3 = function () {
  return <h3 key="h3">JSX Heading 3</h3>;
};

const Heading = () => {
  return (
    <div className="title">
      {Heading1}
      <Heading2 />
      <Heading3 />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search"
          placeholder="Type anything to search"
        />
      </div>
      <FaUserCircle className="uicon" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(Header);
// root.render(<Heading />);
root.render(<Header />);
