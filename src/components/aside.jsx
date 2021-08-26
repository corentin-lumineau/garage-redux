import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{backgroundImage: "url('https://www.taverne-motorcycle.com/images/garage/atelier.jpg')" }} />
      <img className="logo" src="http://marque-voiture.com/wp-content/uploads/2017/03/La-description-du-logo-Honda.jpg" alt="logo" />
      <h1>Coco Bike</h1>
      <p>Welcome to the Coco bike garage ! </p>
      {props.children}
    </div>
  );
};

export default Aside;
