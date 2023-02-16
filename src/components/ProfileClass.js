import React from 'react';

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log('child class - constructor');
  }

  componentDidMount() {
    console.log('child class - componentDidMount');
  }

  render() {
    console.log('child class - render');
    return (
      <div>
        <h1>{this.props.name}'s class based profile</h1>
      </div>
    );
  }
}

export default ProfileClass;
