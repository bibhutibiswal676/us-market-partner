'use client';
import { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6';

export default function VideoPlayer({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (video) {
      // Attempt to autoplay when component mounts
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlaying(true);
          })
          .catch((error) => {
            // Autoplay failed, likely due to browser policy
            console.log('Autoplay prevented:', error);
            setPlaying(false);
          });
      }
    }
  }, []);

  const toggle = async () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      await v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="w-full">
      <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 bg-black">
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          aria-label="Intro video about US Market Partner"
          title="Intro video about US Market Partner"
          className="h-full w-full object-cover"
        />
        <button
          onClick={toggle}
          className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow ring-1 ring-gray-300/60 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          aria-pressed={playing}
          aria-label={playing ? 'Pause video' : 'Play video'}
          title={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <FaPause className="h-6 w-6" aria-hidden="true" />
          ) : (
            <FaPlay className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={toggle}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 ring-1 ring-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          aria-pressed={playing}
          aria-label={playing ? 'Pause' : 'Play'}
          title={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <FaPause className="h-4 w-4" aria-hidden="true" />
          ) : (
            <FaPlay className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
        <button
          onClick={toggleMute}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 ring-1 ring-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          aria-label={muted ? 'Unmute' : 'Mute'}
          title={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? (
            <FaVolumeXmark className="h-4 w-4" aria-hidden="true" />
          ) : (
            <FaVolumeHigh className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
