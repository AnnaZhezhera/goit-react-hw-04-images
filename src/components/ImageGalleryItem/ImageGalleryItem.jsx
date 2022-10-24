import React from 'react';
import { ImageGalleryCard } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <ImageGalleryCard className="gallery-item" key={id}>
      <img src={webformatURL} alt={tags} />
    </ImageGalleryCard>
  );
};
