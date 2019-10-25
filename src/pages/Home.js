import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isLoaded: false,
      query: 'mario'
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
        <form>
          <input
            type='test'
            className='search-box'
            placeholder='Search for...'
            onChange={this.onChange}
          />
          {this.state.games.map(game => (
            <ul key={game.id}>
              <li>
                {game.id} {game.name}
              </li>
            </ul>
          ))}
        </form>
      </div>
    );
  }
}

export default Home;
