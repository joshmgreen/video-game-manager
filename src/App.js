import React, { Component } from 'react';
import './App.css';
import VideoGameList from './components/VideoGameList';
import VideoGame from './components/VideoGame';

const videoGames = [
  { id: 1, name: 'World of Warcraft' },
  { id: 2, name: 'Fire Emblem' },
  { id: 3, name: 'League of Legends' },
  { id: 4, name: 'Death Stranding' }
];

class App extends Component {
  render() {
    return (
      <div className='App'>
        <VideoGameList games={videoGames} />
      </div>
    );
  }
}
export default App;
