import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ searchImages, page }) => {
  console.log('searchImages', searchImages);
  return (
    <ImageGalleryList className="gallery">
      {searchImages.map(image => (
        <ImageGalleryItem key={image.id} {...image} />
      ))}
    </ImageGalleryList>
  );
};

export default ImageGallery;
