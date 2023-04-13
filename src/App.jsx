import Navbar from "./Navbar";
import { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from  './components/Home';
import Loader from "./components/Loader";
import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {

  const [loading, setLoading] = useState(true);
    const [mode, setMode] = useState('light')
    const [modeText, setModeText] = useState('Dark Mode');

    function toggleMode(){
        if(mode==='light'){
            setMode('dark');
            setModeText('Light Mode');
            document.body.style.backgroundColor='black';
            document.body.style.color='white';
        }
        else{
          setMode('light');
          setModeText('Dark Mode');
          document.body.style.backgroundColor='white';
          document.body.style.color='black';

        }
    }
  useEffect(function(){
    setTimeout(function(){
      setLoading(false);
    },2000)
  },[])

  return (
    <div className="App">
           
      {
        loading===true ? <Loader/>: 
        <>
        <Navbar mode={mode} modeText={modeText} toggleMode={toggleMode}/>
        
        <Layout>
    
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>


      </Routes>
      </Layout>
      </>
    }
    </div>
  );
}

export default App;
