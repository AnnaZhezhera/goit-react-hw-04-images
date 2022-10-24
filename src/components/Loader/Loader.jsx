import React from 'react';
import { Bars } from 'react-loader-spinner';

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <Bars
          height="50"
          width="80"
          color="#3f51b5"
          ariaLabel="bars-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          wrapperClass=""
          visible={true}
        />
      )}
    </>
  );
};

export default Loader;
