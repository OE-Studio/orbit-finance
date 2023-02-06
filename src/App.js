import { createContext, useState } from 'react';
import './App.css';
import LandingPage from './views/LandingPage';

export const WaitlistContext = createContext()

function App() {
  const [show, setShow] = useState(false)

  const changeShow = () =>{
    setShow(true)
    setTimeout(()=>{
      setShow(false)
    }, 4000)
  }

  return (
    <div className="App">
      <WaitlistContext.Provider value={{show, changeShow}}>
        <LandingPage/>
      </WaitlistContext.Provider>
    </div>
  );
}

export default App;
