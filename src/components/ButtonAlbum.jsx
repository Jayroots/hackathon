import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonAlbum = () => {
    return (
        <div className='albumbutton'>
         <NavLink to="/album">
        <button className='buttonAlbum'>Créer ton Album Photo </button>
         </NavLink>
        </div>
    );
};

export default ButtonAlbum;