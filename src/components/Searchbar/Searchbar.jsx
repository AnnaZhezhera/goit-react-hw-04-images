import React, { Component } from 'react';
import {
  SearchbarBlock,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  onSearchSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchInput = form.elements.searchInput.value;
    console.log(searchInput);
    this.props.onSubmit(searchInput);
  };

  render() {
    return (
      <SearchbarBlock>
        <SearchForm onSubmit={this.onSearchSubmit}>
          <SearchFormButton type="submit" className="button">
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="searchInput"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarBlock>
    );
  }
}
