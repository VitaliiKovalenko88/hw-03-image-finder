export const ImageGalleryItem = ({ gallarys }) => {
  return gallarys.map(({ id, url, tags }) => {
    return (
      <li key={id}>
        <img src={url} alt={tags} />
      </li>
    );
  });
};
