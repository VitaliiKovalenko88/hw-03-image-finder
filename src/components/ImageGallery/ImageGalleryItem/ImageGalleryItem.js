export const ImageGalleryItem = ({ url, tags }) => {
  return (
    <>
      <img src={url} alt={tags} />
    </>
  );
};
