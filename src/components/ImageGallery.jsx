import React from "react";
import "./ImageGallery.css"; // Import the CSS for styling

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <div className="image-box">
        <img src="./src/images/download.jpg" alt="Image 1" />
      </div>
      <div className="image-box">
        <img src="./src/images/Money-heist.jpg" alt="Money Heist" />
      </div>
      <div className="image-box">
        <img src="./src/images/Venom.jpg" alt="Venom" />
      </div>
      <div className="image-box">
        <img src="./src/images/Formula-1.jpg" alt="Formula 1" />
      </div>
      <div className="image-box">
        <img src="./src/images/Kanguva.jpg" alt="Kanguva" />
      </div>
      <div className="image-box">
        <img src="./src/images/Saga.jpg" alt="Saga" />
      </div>
    </div>
  );
};

export default ImageGallery;
