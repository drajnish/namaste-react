const heading = React.createElement('h1', { id: 'title' }, 'Heading 1');

const heading2 = React.createElement('h2', { id: 'title2' }, 'Heading 2');

const content = React.createElement('div', { className: 'content' }, [
  heading2,
  'Some random content',
]);

const container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading, content]
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react element inside the root

root.render(container);
