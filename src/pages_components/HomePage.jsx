import React from 'react';
import imagegrandmere from "./../assets/images/GrandMere.png";
import Carrousel from '../components/Carrousel';
const HomePage = () => {
    return (
      <div>
         <div className='homePage'>
           <h1 className='titrePage'>Look Grand’MA</h1>
             <img className='imagegrandmere' src={imagegrandmere}/>
             <Carrousel />
               </div>
            
           </div>
    );
};

export default HomePage;