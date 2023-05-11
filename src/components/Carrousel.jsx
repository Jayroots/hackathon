import  { useState } from 'react';

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
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/still-lake.jpg" alt="" />
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/paradise.jpg" alt="" />
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg" alt="" />
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg" alt="" />
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg" alt="" />
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg" alt="" />
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg" alt="" />
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg" alt="" />
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
