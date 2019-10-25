import React from 'react';
import PropTypes from 'prop-types';
import './VideoGame.css';

function VideoGame(props) {
  return (
    <div className='video-game'>
      <span>{props.name}</span>
    </div>
  );
}

VideoGame.propTypes = {
  name: PropTypes.string.isRequired
};

export default VideoGame;
