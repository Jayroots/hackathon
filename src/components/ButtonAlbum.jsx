import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonAlbum = () => {
    return (
        <div className='albumbutton'>
            <NavLink to="/album">

                <button className='buttonAlbum'>Créez votre Album Photo via nos partenaires </button>

            </NavLink>





        </div>
    );
};

export default ButtonAlbum;