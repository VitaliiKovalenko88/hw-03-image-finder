import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = e => {
    this.setState({ imageName: e.currentTarget.value });
  };

  handleSabmite = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header
      // class="searchbar"
      >
        <form
          // class="form"
          onSubmit={this.handleSabmite}
        >
          <button
            type="submit"
            // class="button"
          >
            <span
            // class="button-label"
            >
              Search
            </span>
          </button>

          <input
            // class="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
