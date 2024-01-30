import { createContext, useState } from 'react';
import './App.css';
import LandingPage from './views/LandingPage';
import { PrivacyPolicy } from './views/PrivacyPolicy';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

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
        {/* <LandingPage/> */}
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
            <Route element={<LandingPage/>}/>
          </Routes>
        </Router>
      </WaitlistContext.Provider>
    </div>
  );
}

export default App;
