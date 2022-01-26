import React, { Component } from 'react';
import {
  StyledSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = e => {
    this.setState({ imageName: e.currentTarget.value });
  };

  handleSabmite = e => {
    e.preventDefault();
    if (this.state.imageName.trim() === '') {
      console.log('введите что нибуть!!!');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <StyledSearchbar>
        <SearchForm onSubmit={this.handleSabmite}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </StyledSearchbar>
    );
  }
}
