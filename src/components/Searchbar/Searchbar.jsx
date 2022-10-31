import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarBlock,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export default function Searchbar({ onSubmitt }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeName = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const onSearchSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return alert('Введіть пошукове слово');
    }

    onSubmitt(searchQuery);
  };

  return (
    <SearchbarBlock>
      <SearchForm onSubmit={onSearchSubmit}>
        <SearchFormButton type="submit" className="button">
          <span className="search-icon">
            <FaSearch style={{ width: '100%', height: '100%' }} />
          </span>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChangeName}
        />
      </SearchForm>
    </SearchbarBlock>
  );
}

Searchbar.propTypes = {
  onSubmitt: PropTypes.func,
};
