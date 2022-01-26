import { Grid } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loaderWrapper">
      <div className="loaderBox">
        <Grid color="#FF5733" height={100} width={110} />
      </div>
    </div>
  );
};
