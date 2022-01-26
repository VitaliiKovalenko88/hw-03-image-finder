// import axios from 'axios';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React, { Component } from 'react';
import { StyledApp } from './App.styled';
import { getImageWithQuery } from '../../PixabayApi/pixabayApi';
import { Button } from '../Button/Button';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';

const status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
    imageName: '',
    gallery: [],
    status: status.IDLE,
    page: 1,
    error: null,
  };

  async componentDidUpdate(prevPropse, prevState) {
    try {
      const nextName = this.state.imageName;
      const prevName = prevState.imageName;
      const nextPage = this.state.page;
      const prevPage = prevState.page;

      if (nextName !== prevName || nextPage !== prevPage) {
        this.setState({ status: status.PENDING });
        await this.createGallery(this.state.page);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  handleFormSubmite = imageName => {
    this.setState({ imageName });
  };

  createGallery = async page => {
    const { imageName } = this.state;

    try {
      this.setState({ status: status.PENDING });

      const { hits } = await getImageWithQuery(imageName, page);

      if (hits.length === 0) {
        this.setState({
          error: 'Sory, You are entering an incorrect value',
          status: status.REJECTED,
        });
        return;
      }

      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...hits],
        status: status.RESOLVED,
        error: null,
      }));
    } catch (error) {
      this.setState({
        status: status.REJECTED,
        error: 'something is wrong with the request address'.toUpperCase(),
      });
    }
  };

  onLoadMorePictures = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { status, gallery, error } = this.state;
    const isGallery = gallery.length;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleFormSubmite} />
        {status === 'pending' ? <Loader /> : null}
        {status === 'rejected' ? <div>{error}</div> : null}
        <ImageGallery galleryList={gallery} />
        {isGallery ? <Button onLoadMore={this.onLoadMorePictures} /> : null}
      </StyledApp>
    );
  }
}
