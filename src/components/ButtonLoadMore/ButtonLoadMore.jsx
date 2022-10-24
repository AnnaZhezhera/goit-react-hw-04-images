import React from 'react';
import { BtnLoadMore } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ onClick, page }) => {
  return (
    <BtnLoadMore type="button" onClick={onClick} page={page}>
      Load more
    </BtnLoadMore>
  );
};

export default ButtonLoadMore;
