import React from 'react';

import imagegrandmere from "./../assets/images/GrandMere.png";
import ButtonAlbum from '../components/ButtonAlbum';
import Carrousel from '../components/Carrousel';

const HomePage = () => {

    return (
      <div>
         <div className='homePage'>
         <h2>Pas le temps d'appeler Mamie ?<br></br>
         Et pourtant tu es sur ton ordi ? 
        </h2>
         
          
             <ButtonAlbum /><img className='imagegrandmere' src={imagegrandmere}/>
             <Carrousel />
               </div>
            
           </div>
    );
};

export default HomePage;