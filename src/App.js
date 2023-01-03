import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Pending from './Components/Pending/Pending';
import Inprogress from './Components/Inprogress/Inprogress';
import Completed from './Components/Completed/Completed';
import All from './All/All';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from './context';
import { useState } from 'react';

function App() {
 
  const [pending, setPending] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);

  return (
    <>
      <div className="wrapper">
        <AppContext.Provider value={{pending,setPending,inprogress,setInprogress,completed,setCompleted}}>
          <BrowserRouter>
            <Navbar />
            <div className="check">
              <Routes>
                <Route path="/" element={<All />} />

                <Route path="/pending" element={<Pending />} />
                <Route path="/inprogress" element={<Inprogress />} />
                <Route path="/completed" element={<Completed />} />
              </Routes>
            </div>
          </BrowserRouter>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
