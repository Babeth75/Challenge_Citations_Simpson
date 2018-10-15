import React from 'react';

const  DisplayCitations = ({ citations }) => {
    return (
        <div>
          {citations.map(
            (element, index) => 
              <div key={index}>
                <p>{element.character}</p>
                <img src={element.image} alt={element.name} />
                <p>{element.quote}</p>
              </div>
          )}
        </div>
    );
};

export default DisplayCitations;