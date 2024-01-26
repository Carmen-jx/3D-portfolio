import React, { useEffect, useRef, useState } from 'react';

const SoundCloudPlaylist = ({ url }) => {
  const iframeRef = useRef(null);
  const [isAPILoaded, setIsAPILoaded] = useState(false);


  useEffect(() => {
    // Function to load the SoundCloud API script
    const loadSoundCloudAPI = () => {
      if (window.SC && window.SC.Widget) {
        setIsAPILoaded(true); // API is already available
        return;
      }

      const script = document.createElement('script');
      script.src = "https://w.soundcloud.com/player/api.js";
      script.async = true;
      script.onload = () => setIsAPILoaded(true); // Set flag when script is loaded
      document.body.appendChild(script);
    };

    loadSoundCloudAPI();
  }, []);



  useEffect(() => {
    if (isAPILoaded && iframeRef.current) {
      // Initialize the widget here
      const widget = window.SC.Widget(iframeRef.current);

      // Example: Bind event listeners or control playback as needed
      widget.bind(window.SC.Widget.Events.READY, () => {
        console.log('SoundCloud player is ready');
        // You can add more functionality here
      });
    }
  }, [isAPILoaded]);



  return (
    <>
      <iframe 
        ref={iframeRef}
        width="100%" 
        height="200" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src={url}
        style={{border: 'none', overflow: 'hidden'}}
        allowFullScreen>
      </iframe>
      
    </>
  );
};

export default SoundCloudPlaylist;


