import {
  StyledImageGalleryItem,
  ImageGalleryItemImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, url, tags }) => {
  return (
    <StyledImageGalleryItem key={id}>
      <ImageGalleryItemImg src={url} alt={tags} />
    </StyledImageGalleryItem>
  );
};
