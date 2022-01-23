import React, { Component } from 'react';
import { getImageWithQuery } from '../../PixabayApi/pixabayApi';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

const status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImageGallery extends Component {
  state = {
    gallary: [],
    status: status.IDLE,
    page: 1,
  };

  async componentDidUpdate(prevPropse, prevState) {
    try {
      const nextName = this.props.imageName;
      const prevName = prevPropse.imageName;

      if (nextName !== prevName) {
        this.setState({ status: status.RESOLVED });
        this.createGallery();
      }
    } catch (error) {
      console.log(error);
    }
  }

  createGallery = page => {
    this.setState({ status: status.PENDING });
    setTimeout(() => {
      getImageWithQuery(this.props.imageName, this.state.page).then(galarry => {
        this.setState(prevState => ({
          gallary: [...prevState.galarry, ...galarry.hits],
        }));
      });
      this.setState({ status: status.RESOLVED });
    }, 2000);
  };

  render() {
    const { status, gallary } = this.state;

    if (status === 'idle') {
      return <div>Введите что нибуть....</div>;
    }

    if (status === 'pending') {
      return <div>Загружаем...</div>;
    }

    if (status === 'resolved') {
      return (
        <ul>
          <ImageGalleryItem gallarys={gallary} />
        </ul>
      );
    }
  }
}
