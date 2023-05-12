import React from 'react';

const AlbumCards = ({ name, image, description, url }) => {
    return (


        <li className="album-card">

            <h2>{name}</h2>
            <img /* className='albumcard-img' */ src={image} />
            <p>{description}</p>
            <a href={url} ><button className=''> Visitez le site
            </button></a>



        </li>


    );
};

export default AlbumCards;