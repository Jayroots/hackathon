import  { useState } from 'react';
import cj1 from '../assets/images/cj1.jpg'
import cj2 from '../assets/images/cj2.jpg'
import cj3 from '../assets/images/cj3.jpg'
import cj4 from '../assets/images/cj4.jpg'
import cj5 from '../assets/images/cj5.jpg'
import cj6 from '../assets/images/cj6.jpg'
import cj7 from '../assets/images/cj7.jpg'
import cj8 from '../assets/images/cj8.jpg'

const Carrousel = () => {
  const [angle, setAngle] = useState(0);

  const gallerySpin = (sign) => {
    const spinner = document.querySelector("#spinner");
    const newAngle = sign ? angle - 45 : angle + 45;
    setAngle(newAngle);
    spinner.setAttribute(
      "style",
      `-webkit-transform: rotateY(${newAngle}deg);
      -moz-transform: rotateY(${newAngle}deg);
      transform: rotateY(${newAngle}deg);`
    );
  };

  return (
    <>
     
      <div id="carousel">
        <figure id="spinner">
          <img src={cj1}alt="" />
          <img src={cj2}alt="" />
          <img src={cj3} alt="" />
          <img src={cj4} alt="" />
          <img src={cj5}alt="" />
          <img src={cj6} alt="" />
          <img src={cj7} alt="" />
          <img src={cj8} alt="" />
        </figure>
      </div>
      <span
        style={{ float: 'left' }}
        className="ss-icon"
        onClick={() => gallerySpin('-')}
      >
        &lt;
      </span>
      <span
        style={{ float: 'right' }}
        className="ss-icon"
        onClick={() => gallerySpin('')}
      >
        &gt;
      </span>
    </>
  );
};

export default Carrousel;
