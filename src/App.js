import React, { useEffect, useState } from 'react';
import './App.scss';
import './styles/style.css';
import './styles/boxanimation.scss';

import CSSLoader from './components/CSSLoader';
import HomePage from './components/HomePage';
import BoxedLoader from './components/BoxedLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  
  return (
    <>
    {loading ? 
      (
        <>
        <div className="container">
          <div className="items">
             <BoxedLoader />
          </div>
            <div className="items">
             <CSSLoader />
          </div>
        </div>
      
       </> ) : <HomePage/>
    }
    </>
  );
}

export default App;
