// import axios from 'axios';
import React, { Component } from 'react';
// import { ImageGalleryItem } from '../ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';

// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmite = imageName => {
    this.setState({ imageName });
  };

  render() {
    const { imageName } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmite} />
        <ImageGallery imageName={imageName} />
      </div>
    );
  }
}
