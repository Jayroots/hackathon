import React from 'react';
import imageterre from "./../assets/images/la-terre.png";
import imagegrandmere from "./../assets/images/GrandMere.png";

import Carrousel from '../components/Carrousel';

const HomePage = () => {

    return (
      <div>
         <div className='homePage'>
         
         
           <h1 className='titrePage'><img className='imageterre' src={imageterre}/>Look Grand’MA</h1>
             <img className='imagegrandmere' src={imagegrandmere}/>
             <Carrousel />
               </div>
            
           </div>
    );
};

export default HomePage;