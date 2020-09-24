import React from 'react';
import Loader from '../logo.svg'

export function AnimatedLoader() {
    return (
        <>
            <div className="svg">
                <img src={Loader} alt="Loader" />
            </div>
        </>
    );
}

export default AnimatedLoader;
