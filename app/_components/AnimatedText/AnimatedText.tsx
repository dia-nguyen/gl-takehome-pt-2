
import { useState, useEffect } from "react";

/**
 * Animates a list of works scrolling downwards
 */
export default function AnimatedText({ words }: { words: string[]; }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("word-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("word-out");

      setTimeout(() => {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % words.length);
        setAnimationClass("word-in");
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div key={currentIndex} className={`font-display inline-block italic overflow-clip`}>
      <span className={`${animationClass} inline-block `}>
        {words[currentIndex]}
      </span>
    </div>
  );
}
