import React, { useState, useRef } from 'react';

const audioSources = [
  {
    src: '/Audio/1.mp3',
    title: 'Sexual Healing',
    artist: 'Marvin Gaye',
  },
  {
    src: '/Audio/2.mp3',
    title: 'Fly Away',
    artist: 'Lenny Kravitz',
  },
  {
    src: '/Audio/3.mp3',
    title: 'Jeremy',
    artist: 'Pearl Jam',
  },
  {
    src: '/Audio/4.mp3',
    title: 'Scar Tissue',
    artist: 'Red Hot Chili Peppers',
  }
];

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrackTitle, setCurrentTrackTitle] = useState(
    `${audioSources[currentTrackIndex].title} - ${audioSources[currentTrackIndex].artist}`,
  );

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.src = audioSources[currentTrackIndex].src;
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    const audio = audioRef.current;

    if (currentTrackIndex < audioSources.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setCurrentTrackTitle(
        `${audioSources[currentTrackIndex + 1].title} - ${audioSources[currentTrackIndex + 1].artist}`,
      );
      audio.src = audioSources[currentTrackIndex + 1].src;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
      setCurrentTrackIndex(0);
      setCurrentTrackTitle(
        `${audioSources[0].title} - ${audioSources[0].artist}`,
      );
      audio.src = audioSources[0].src;
      audio.play();
    }
  };

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % audioSources.length;
    setCurrentTrackIndex(nextIndex);
    setCurrentTrackTitle(
      `${audioSources[nextIndex].title} - ${audioSources[nextIndex].artist}`,
    );
    const audio = audioRef.current;
    audio.src = audioSources[nextIndex].src;
    if (isPlaying) {
      audio.play();
    }
  };

  const handlePreviousTrack = () => {
    const prevIndex =
      (currentTrackIndex - 1 + audioSources.length) % audioSources.length;
    setCurrentTrackIndex(prevIndex);
    setCurrentTrackTitle(
      `${audioSources[prevIndex].title} - ${audioSources[prevIndex].artist}`,
    );
    const audio = audioRef.current;
    audio.src = audioSources[prevIndex].src;
    if (isPlaying) {
      audio.play();
    }
  };

  const trackInfoWrapperStyle = {
    backgroundColor: '#f0f0f0',
    padding: '5px 10px',
    borderRadius: '5px',
  };
  return (
    <div className="music-player-container">
      <div className="music-player">
        <audio ref={audioRef} onEnded={handleEnded} />
        <div className="controls">
          <div className="buttons-container">
            <button className="back-button" onClick={handlePreviousTrack}>
              ⏮
            </button>
            <button className="play-pause-button" onClick={handlePlayPause}>
              {isPlaying ? '⏸️' : '▶'}
            </button>
            <button className="next-button" onClick={handleNextTrack}>
              ⏭
            </button>
          </div>
        </div>
        <div className="track-info-container">
          <div className="track-info-wrapper">
            <div className="track-info">
              <div className="track-title">{audioSources[currentTrackIndex].title}</div>
              <div className="track-artist">{audioSources[currentTrackIndex].artist}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }  
  

export default MusicPlayer;
