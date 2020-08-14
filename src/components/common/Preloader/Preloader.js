import React from 'react';
import preloader from '../../../assets/imagesloading.svg';

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
            />
        </div>
    );
};
export default Preloader;
