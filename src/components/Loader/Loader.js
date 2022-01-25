import { Grid } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loaderWrapper">
      <div className="loaderBox">
        <Grid heigth="100" width="100" color="grey" ariaLabel="loading" />
      </div>
    </div>
  );
};
