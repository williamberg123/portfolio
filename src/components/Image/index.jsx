import React from 'react';

import PropTypes from 'prop-types';

export default function Image({ imageRoot, description }){
    return (
        <img src={imageRoot} alt={description} />
    );
}

Image.propTypes = {
    imageRoot: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
