import React from 'react';

const ImageGalleryItem = ({
  handleImageClick,
  webformatURL,
  largeImageURL,
}) => {
  const onImageClick = src => {
    handleImageClick(src);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={() => onImageClick(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
