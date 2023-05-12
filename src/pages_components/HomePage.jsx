import React from 'react';
import imageterre from "./../assets/images/album-photo.png";
import imagegrandmere from "./../assets/images/GrandMere.png";
import ButtonAlbum from '../components/ButtonAlbum';
import Carrousel from '../components/Carrousel';

const HomePage = () => {

    return (
      <div>
         <div className='homePage'>
         
         
           <h1 className='titrePage'><img className='imageterre' src={imageterre}/>Look Grand’MA</h1>
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