import React from 'react';
import imagegrandmere from "./../assets/images/GrandMere.png";

const HomePage = () => {
    return (
        <div className='homePage'>
            <h1 className='titrePage'>Look Grand’MA</h1>
           <img className='imagegrandmere' src={imagegrandmere}/>
           </div>
        
    );
};

export default HomePage;