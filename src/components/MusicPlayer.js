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
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.src = audioSources[currentTrackIndex].src;
      audio.volume = volume;
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
    setShowImage(false);
  };

  const handleEnded = () => {
    const audio = audioRef.current;

    if (currentTrackIndex < audioSources.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      audio.src = audioSources[currentTrackIndex + 1].src;
      audio.volume = volume;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
      setCurrentTrackIndex(0);
      audio.src = audioSources[0].src;
      audio.volume = volume;
      audio.play();
    }
  };

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % audioSources.length;
    setCurrentTrackIndex(nextIndex);
    const audio = audioRef.current;
    audio.src = audioSources[nextIndex].src;
    audio.volume = volume;
    if (isPlaying) {
      audio.play();
    }
  };

  const handlePreviousTrack = () => {
    const prevIndex =
      (currentTrackIndex - 1 + audioSources.length) % audioSources.length;
    setCurrentTrackIndex(prevIndex);
    const audio = audioRef.current;
    audio.src = audioSources[prevIndex].src;
    audio.volume = volume;
    if (isPlaying) {
      audio.play();
    }
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    setVolume(parseFloat(e.target.value));
    audio.volume = parseFloat(e.target.value);
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
              {isPlaying ? 'II' : '▶'}
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
          <div className="volume-container">
            <input
              type="range"
              min="0"
              max="1"
              step="0.001"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
  }  

export default MusicPlayer;
