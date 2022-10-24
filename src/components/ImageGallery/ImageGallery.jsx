import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList, ErrorMessage } from './ImageGallery.styled';

const ImageGallery = ({ searchImages, error }) => {
  console.log('searchImages', searchImages);

  // if (!error) {
  return (
    <ImageGalleryList className="gallery">
      {error === true ? (
        <ErrorMessage>Try another search word</ErrorMessage>
      ) : (
        searchImages.map(image => (
          <ImageGalleryItem key={image.id} {...image} />
        ))
      )}
    </ImageGalleryList>
  );
};
// return ;

export default ImageGallery;
