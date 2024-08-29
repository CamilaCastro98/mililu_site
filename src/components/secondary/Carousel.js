const Carousel = () => {
    return (
      <div className="relative w-full">
        <div className="relative w-full carousel">
          <div id="item1" className="w-full carousel-item">
          <h1 className="absolute">El Hombre Flotante</h1>
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
              alt="Slide 1"
            />
          </div>
          <div id="item2" className="w-full carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
              alt="Slide 2"
            />
          </div>
          <div id="item3" className="w-full carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
              alt="Slide 3"
            />
          </div>
          <div id="item4" className="w-full carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
              alt="Slide 4"
            />
          </div>
        </div>
        <div className="absolute bottom-0 z-10 flex justify-center w-full gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    );
  };
  
  export default Carousel;
  