import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = e => {
    this.setState({
      imageName: e.currentTarget.value,
    });
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
            <ImSearch />
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

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
