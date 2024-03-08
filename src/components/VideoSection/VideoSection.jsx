import React, { useRef, useEffect, useState } from 'react';

const VideoSection = () => {
    const videoRef = useRef(null);
    const [shouldPlay, setShouldPlay] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Adjust this threshold as needed
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setShouldPlay(true);
                    observer.unobserve(entry.target); // Stop observing once video starts playing
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <div className='w-full bg-amber-300 flex flex-col justify-center items-center py-32'>
            <p className='text-black text-xl font-semibold mb-4'>Comes with 20 default themes or...</p>
            <h1 className='text-black font-bold text-5xl mb-14'><span className='text-6xl'>J</span>ust tell Pebblely what you want to see!</h1>

            <video
                className='w-8/12'
                ref={videoRef}
                src="/assets/images/WhatsAppVideo2024-03-07at11.32.09AM-ezgif.com-mute-video.mp4"
                autoPlay={shouldPlay} // Autoplay when shouldPlay is true
                muted
                loop
            ></video>
        </div>
    );
};

export default VideoSection;
