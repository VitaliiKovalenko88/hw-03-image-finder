import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled.js';

export const ImageGallery = ({ status, galleryList }) => {
  return (
    <StyledImageGallery>
      {galleryList.map(({ id, webformatURL, tags }) => {
        return <ImageGalleryItem id={id} url={webformatURL} tags={tags} />;
      })}
    </StyledImageGallery>
  );
};
