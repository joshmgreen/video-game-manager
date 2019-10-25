import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input
            type='text'
            name='gamename'
            placeholder='Please type the name of a video game'
          />
          <input type='submit' value='Submit' />
        </label>
      </form>
    );
  }
}

export default Home;
