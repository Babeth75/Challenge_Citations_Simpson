import React from 'react';

const GenererateCitations = ({selectCitations}) =>{
    return(
        <button  onClick={selectCitations}>Get Citation</button>
    );
};

export default GenererateCitations;