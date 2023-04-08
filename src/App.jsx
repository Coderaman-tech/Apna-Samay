import Navbar from "./Navbar";
import { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from  './components/Home';
import Loader from "./components/Loader";
import Layout from "./components/Layout";


function App() {

  const [loading, setLoading] = useState(true);

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
        <Navbar/>
        
        <Layout>
    
      <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>
      </Layout>
      </>
    }
    </div>
  );
}

export default App;
