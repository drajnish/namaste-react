import React from 'react';
import Profile from './Profile';
import ProfileClassComp from './ProfileClass';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent - constructor');
  }

  componentDidMount() {
    // Best place to make an api call
    console.log('Parent - componentDidMount');
  }

  render() {
    console.log('Parent - render');
    return (
      <div>
        <h1>About us page</h1>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the path
        </p>
        <Profile name={'Rajnish Deshmukh'} />
        <ProfileClassComp name={'React'} />
      </div>
    );
  }
}

export default About;
