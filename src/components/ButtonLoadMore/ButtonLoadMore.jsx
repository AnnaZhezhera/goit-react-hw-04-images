import React from 'react';
import { BtnLoadMore } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ onClick, searchImages, isLoading }) => {
  if (searchImages.length > 0 && !isLoading) {
    return (
      <BtnLoadMore type="button" onClick={onClick}>
        Load more
      </BtnLoadMore>
    );
  }
};

export default ButtonLoadMore;
