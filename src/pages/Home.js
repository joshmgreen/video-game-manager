import React, { Component } from 'react';
import './Home.css';
import TextField from '@material-ui/core/TextField';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isLoaded: false,
      query: 'Zelda'
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
              <li>
                {game.name} {game.summary}
              </li>
            </ul>
          ))}
        </form>
      </div>
    );
  }
}

export default Home;
