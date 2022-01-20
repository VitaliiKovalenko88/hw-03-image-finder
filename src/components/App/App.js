// import axios from 'axios';
import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';

// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmite = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmite} />
      </div>
    );
  }
}
