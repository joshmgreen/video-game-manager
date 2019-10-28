import React, { Component } from 'react';
import './Home.css';
import TextField from '@material-ui/core/TextField';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isLoaded: false,
      query: ''
    };
  }

  componentDidMount() {
    this.search('');
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    });
    this.search(value);
  };

  search = async query => {
    const url = `https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/?search=${query}&fields=id,name,summary`;

    const results = await fetch(url, {
      method: 'get',
      headers: new Headers({
        'user-key': '7228d71b77b1e753f65e405e7fa1f66e'
      })
    });

    const data = await results.json();
    console.log(data);
    this.setState({ games: data });
  };

  render() {
    return (
      <div className='container'>
        <form>
          <TextField
            id='outlined-name'
            type='text'
            className='search-box'
            placeholder='Search for...'
            variant='outlined'
            onChange={this.onChange}
          />
          {this.state.games.map(game => (
            <ul key={game.id}>
              <div class='col s12 m7'>
                <h2 class='header'> {game.name} </h2>
                <div class='card horizontal'>
                  <div class='card-image'>
                    <img alt='' src='https://lorempixel.com/100/190/nature/6' />
                  </div>
                  <div class='card-stacked'>
                    <div class='card-content'>
                      <p>{game.summary}</p>
                    </div>
                    <div class='card-action'></div>
                  </div>
                </div>
              </div>
              {/* {game.name} {game.summary} */}
            </ul>
          ))}
        </form>
      </div>
    );
  }
}

export default Home;
