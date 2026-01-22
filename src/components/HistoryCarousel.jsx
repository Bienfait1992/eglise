import { useState, useEffect } from "react";

export default function HistoryCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-lg shadow-lg">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`History ${index + 1}`}
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* navigation bullets */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-blue-700" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
