/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getVideoSource } from '../actions';

import NotFound from './NotFound';
import '../assets/styles/components/Player.scss';

const Player = ({
  match, history, playing, getVideo,
}) => {
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;
  useEffect(() => {
    getVideo(id);
  }, []);

  return hasPlaying ? (
    <div className="player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button
          type="button"
          onClick={() => {
            history.goBack();
          }}
        >
          Regresar
        </button>
      </div>
    </div>
  ) : (<NotFound />);
};

Player.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  playing: PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    language: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    cover: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
  getVideo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  playing: state.playing,
});

const mapDispatchToProps = {
  getVideo: getVideoSource,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
