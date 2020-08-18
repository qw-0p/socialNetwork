import React from 'react';
import preloader from '../../../assets/images/loading.svg';

const Preloader = () => {
  return (
    <div>
      <img
        src={preloader}
        style={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
        }}
        alt=''
      />
    </div>
  );
};
export default Preloader;
