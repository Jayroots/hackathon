import React from 'react';

const AlbumCards = ({name, image, description, url }) => {
    return (
        <div className="albumCard">
            
        <li className="Simp">
        <a href="https://www.journiapp.com/fr" >{url}
        <p>{name}JOURNI</p></a>
        <h2>{description}description</h2>
        
          <img src ={url} />
        
        </li>
      
</div>
    );
};

export default AlbumCards;