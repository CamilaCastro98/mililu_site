"use client"
import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="relative min-w-full h-[42rem]">
          <h1 className="absolute text-white text-4xl transform -translate-x-1/2 -translate-y-1/2 top-[70%] left-1/2">Sabrina</h1>
          <button className="absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-[80%] left-1/2">Ver Más</button>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMzQ3NGU3YzEtYzBhZi00NWU1LTlhOTMtNTlmZGNhZWRlYTU3XkEyXkFqcGdeQXVyOTQ2NDAwNzg@._V1_.jpg"
            className="object-cover w-full h-full"
            alt="Slide 1"
          />
        </div>
        <div className="relative min-w-full h-[42rem]">
          <h1 className="absolute text-white text-4xl transform -translate-x-1/2 -translate-y-1/2 top-[70%] left-1/2">Más Allá Del Perdón</h1>
          <button className="absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-[80%] left-1/2">Ver Más</button>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMzNkMGFjNzgtNDlhYS00MTUwLTg2NTgtNzhjNDc3ZGI1NzAxXkEyXkFqcGdeQXVyOTQ2NDAwNzg@._V1_.jpg"
            className="object-cover w-full h-full"
            alt="Slide 2"
          />
        </div>
        <div className="relative min-w-full h-[42rem]">
          <h1 className="absolute text-white text-4xl transform -translate-x-1/2 -translate-y-1/2 top-[70%] left-1/2">Estacionamiento Para Dos</h1>
          <button className="absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-[80%] left-1/2">Ver Más</button>
          <img
            src="https://m.media-amazon.com/images/M/MV5BOGJkNGI2NzgtM2E4Ni00MjNmLWIxZTAtNTYxOWQzYmYyMDA3XkEyXkFqcGc@._V1_.jpg"
            className="object-cover w-full h-full"
            alt="Slide 3"
          />
        </div>
        <div className="relative min-w-full h-[42rem]">
          <h1 className="absolute text-white text-4xl transform -translate-x-1/2 -translate-y-1/2 top-[70%] left-1/2">El Hombre Flotante</h1>
          <button className="absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-[80%] left-1/2">Ver Más</button>
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="object-cover w-full h-full"
            alt="Slide 4"
          />
        </div>
      </div>

      <div className="absolute z-10 flex justify-center w-full gap-2 py-2 bottom-6">
        <button onClick={() => setCurrentIndex(0)} className={`btn btn-xs ${currentIndex === 0 && "btn-active"}`}>Sabrina</button>
        <button onClick={() => setCurrentIndex(1)} className={`btn btn-xs ${currentIndex === 1 && "btn-active"}`}>Más allá del perdón</button>
        <button onClick={() => setCurrentIndex(2)} className={`btn btn-xs ${currentIndex === 2 && "btn-active"}`}>Estacionamiento Para Dos</button>
        <button onClick={() => setCurrentIndex(3)} className={`btn btn-xs ${currentIndex === 3 && "btn-active"}`}>El Hombre Flotante</button>
      </div>
    </div>
  );
};

export default Carousel;


