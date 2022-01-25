import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';

export const ImageGallery = ({ status, galleryList }) => {
  if (status === 'idle') {
    return <div>Введите что нибуть....</div>;
  }

  if (status === 'pending') {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (status === 'resolved') {
    return (
      <ul>
        {galleryList.map(({ id, webformatURL, tags }) => {
          return (
            <li key={id}>
              <ImageGalleryItem url={webformatURL} tags={tags} />
            </li>
          );
        })}
      </ul>
    );
  }
};
