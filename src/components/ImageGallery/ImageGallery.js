import React, { Component } from 'react';
import { fetchImageWithQuery } from '../PixabayApi/pixabayApi';

export class ImageGallery extends Component {
  state = {};

  async componentDidUpdate(prevPropse, prevState) {
    const nextName = this.props.imageName;
    const prevName = prevPropse.imageName;

    if (nextName !== prevName) {
      const images = await fetchImageWithQuery(this.props.imageName);

      console.log(images);
    }
  }

  render() {
    return (
      <ul>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    );
  }
}
