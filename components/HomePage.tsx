"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    videoSrc: "/home-bg.mp4", // Desktop video
    mobileVideoSrc: "/home-bg-mobile.mp4", // Mobile video
    heading: "Built on trust,",
    subheading: "Backed by excellence",
  },
  {
    videoSrc: "/luxury-home.mp4", // Desktop video
    mobileVideoSrc: "/luxury-home-mobile.mp4", // Mobile video
    heading: "Crafted for luxury",
    subheading: "Engineered for comfort",
  },
  {
    videoSrc: "/skyline-living.mp4", // Desktop video
    mobileVideoSrc: "/skyline-living-mobile.mp4", // Mobile video
    heading: "Where vision meets value",
    subheading: "Live beyond limits",
  },
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Resize listener to detect mobile vs desktop
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Effect to update video source when screen size changes
  useEffect(() => {
    const currentVideo = videoRefs.current[current];
    if (!currentVideo) return;

    // Set the video source to mobile or desktop based on screen size
    const sourceElement = currentVideo.querySelector(
      "source"
    ) as HTMLSourceElement;
    if (sourceElement) {
      sourceElement.src = isMobile
        ? slides[current].mobileVideoSrc
        : slides[current].videoSrc;
      currentVideo.load(); // Reload the video to apply the new source
    }

    const playVideo = () => {
      currentVideo.play().catch((err) => console.warn("Autoplay failed:", err));
    };

    if (currentVideo.readyState >= 3) {
      playVideo();
    } else {
      currentVideo.addEventListener("canplay", playVideo, { once: true });
    }

    const handleEnded = () => {
      setCurrent((prev) => (prev + 1) % slides.length);
    };

    currentVideo.addEventListener("ended", handleEnded);

    return () => {
      currentVideo.removeEventListener("ended", handleEnded);
      currentVideo.removeEventListener("canplay", playVideo);
    };
  }, [current, isMobile]); // Add `isMobile` to dependency array to react to screen resize

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -100) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (info.offset.x > 100) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}

      {/* Background Videos */}
      {slides.map((slide, index) => (
        <video
          key={index} // Ensure React re-renders when screen size changes
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <source
            src={isMobile ? slide.mobileVideoSrc : slide.videoSrc} // Default video src based on screen size
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Slide Content */}
      <motion.div
        key={current}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].heading}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="luxury-font text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 tracking-wider drop-shadow-[0_3px_4px_rgba(0,0,0,0.4)]">
              {slides[current].heading}
            </h1>
            <h2 className="luxury-font text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-wide drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]">
              {slides[current].subheading}
            </h2>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HomePage;
