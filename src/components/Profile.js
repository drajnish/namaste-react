import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      count2: 1,
    };
    console.log('Child - constructor');
  }

  componentDidMount() {
    console.log('Child - componentDidMount');
  }

  render() {
    console.log('Child - render');
    return (
      <div>
        <h1>This is {this.props.name}'s profile page</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            })
          }
        >
          {this.state.count}
        </button>
        <button
          onClick={() =>
            this.setState({
              count2: this.state.count2 * 2,
            })
          }
        >
          {this.state.count2}
        </button>
      </div>
    );
  }
}

export default Profile;
