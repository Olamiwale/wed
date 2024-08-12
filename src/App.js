import React from 'react';
import Home from './components/Home';
import image1 from './assets/edited_b_2.jpg'
import image2 from './assets/edited_b_10.jpg'
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />

      <div>
      <div>
      <div className='m-10'>
        <div className="flex gap-5 justify-between items-center">
          <img className="image-1" src={image1} alt="Image 1" />
          <div>
            <p className="font-bold text-xl leading-4 italic">To My Handsome Ola....</p>
            <p className="pt-[20px] italic">
              In your eyes, a universe unfolds, A galaxy of love, where stars are
              bold. With every glance, my heart takes flight, In your embrace,
              everything feels right. Your laughter, like a melody, pure and
              sweet, Guides me through life, makes me complete. In the warmth of
              your smile, I find my home, With you, my love, I’ll never roam.
            </p>
          </div>
        </div>
        <div className="pt-10 flex justify-between items-center">
          <div>
            <p className="font-bold text-xl italic">To My amazing Esther....</p>
            <p className="pt-[20px] italic">
              From the moment our eyes first met, A spark ignited, a love beset. In a crowded room, time stood still, A serendipity, a destined thrill.
              Your smile, a beacon in the night, Turned darkness into purest light. With every word, a bond was cast, In that instant, our hearts held fast. The world faded, you were all I saw, In your presence, I
              felt no flaw. 
            </p>
          </div>
          <img className="image-2 shadow-lg" src={image2} alt="Image 2" />
        </div>
      </div>
    </div>

      </div>

      <Footer />
   

    </div>
  );
}

export default App;
