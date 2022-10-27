import React from 'react';
import PropTypes from 'prop-types';
import { BtnLoadMore } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ onClick, isShown }) => {
  return (
    isShown && (
      <BtnLoadMore type="button" onClick={onClick}>
        Load more
      </BtnLoadMore>
    )
  );
};

export default ButtonLoadMore;

ButtonLoadMore.prototype = {
  searchImages: PropTypes.arrayOf(PropTypes.shape({})),
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};
