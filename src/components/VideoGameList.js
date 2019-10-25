import React from 'react';
import VideoGame from './VideoGame';

function VideoGameList(props) {
  return (
    <div>
      {props.games.map(game => (
        <VideoGame key={game.id} name={game.name} />
      ))}
    </div>
  );
}

export default VideoGameList;
