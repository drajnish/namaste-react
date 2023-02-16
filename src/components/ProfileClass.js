import React from 'react';

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Jon Doe',
        location: 'Delhi',
      },
    };
    console.log('child class - constructor');
  }

  async componentDidMount() {
    console.log('child class - componentDidMount before api call');
    const data = await fetch('https://api.github.com/users/drajnish');
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log('Namaste React OP');
    }, 1000);

    console.log('child class - componentDidMount after api call');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('componentWillUnmount');
  }

  render() {
    console.log('child class - render');
    const { name, location, avatar_url, bio } = this?.state?.userInfo;
    return (
      <>
        <h1>Profile class component</h1>
        <div className="profile-class">
          <img className="profile-pic" src={avatar_url} alt="profile picture" />
          <div>
            <h2>Name: {name}</h2>
            <h4>( {bio} )</h4>
            <h3>Location: {location}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileClass;
