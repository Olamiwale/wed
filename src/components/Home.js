import React, { useEffect, useState } from 'react';
import Countdown from './Countdown';


function Home() {
  return (
    <div className="home">
      <h1 className="animated-heading">Esther & Ola</h1>
      <Countdown />
      
    </div>
  );
}

export default Home;
