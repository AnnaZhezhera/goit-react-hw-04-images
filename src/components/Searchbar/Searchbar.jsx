import React, { Component } from 'react';
import {
  SearchbarBlock,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChangeName = event => {
    console.log(event.currentTarget.value);
    this.setState({
      searchQuery: event.currentTarget.value.toLowerCase(),
    });
  };

  onSearchSubmit = event => {
    event.preventDefault();

    console.log('this.state.searchQuery', this.state.searchQuery);
    if (this.state.searchQuery.trim() === '') {
      return alert('Введіть пошукове слово');
    }

    this.props.onSubmitt(this.state.searchQuery);
  };

  render() {
    return (
      <SearchbarBlock>
        <SearchForm onSubmit={this.onSearchSubmit}>
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
            value={this.state.searchQuery}
            onChange={this.handleChangeName}
          />
        </SearchForm>
      </SearchbarBlock>
    );
  }
}
