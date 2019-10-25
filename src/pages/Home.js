import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { games: [] };
  }

  // Save items to the list
  save() {
    var games = [...this.state.games];
    games.push(this.TextField.value);
    this.setState({ games });
    // Clear the text field after you press save
    this.TextField.value = '';
  }

  // Clear the list
  clear() {
    this.setState({ games: [] });
  }

  render() {
    return (
      <div className='container'>
        <h1> TO-DO List</h1>
        <br />
        <input
          type='text'
          ref={ip => {
            this.TextField = ip;
          }}
        />
        <br />
        <button
          onClick={this.save.bind(this)}
          className='btn btn-primary glyphicon glyphicon-floppy-saved'
        >
          Save
        </button>
        <button
          onClick={this.clear.bind(this)}
          className='btn btn-primary glyphicon glyphicon-floppy-saved'
        >
          Clear
        </button>
        <br />
        <ul>
          {this.state.games.map(function(games) {
            return <li>{games}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
