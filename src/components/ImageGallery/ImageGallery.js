import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, handleImageClick }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        handleImageClick={handleImageClick}
        key={id}
        largeImageURL={largeImageURL}
        webformatURL={webformatURL}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  handleImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
