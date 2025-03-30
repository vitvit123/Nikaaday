import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // This will attempt to play the audio on load
  useEffect(() => {
    const attemptAutoPlay = async () => {
      if (audioRef.current) {
        try {
          // Attempt autoplay
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          // Log error if autoplay is blocked
          console.error("Autoplay failed:", error);

          // Provide a fallback by showing a "Play" button
          setIsPlaying(false);
        }
      }
    };

    // Call the function when the component is mounted
    attemptAutoPlay();
  }, []);

  const playAudio = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play(); // Manually play if autoplay fails
        setIsPlaying(true);
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
    }
  };

  return (
    <div>
      {/* Invisible Play button that takes up the whole screen but hidden */}
      {!isPlaying && (
        <button
          onClick={playAudio}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            zIndex: 9999, // Make sure it is clickable over other content
            opacity: 0,   // Make it invisible but still functional
          }}
        />
      )}

      <audio ref={audioRef} loop>
        <source src="/Nikaaday/src/assets/flytowardtoyou.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
