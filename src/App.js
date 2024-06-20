import React, { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Blocks } from 'react-loader-spinner';
import Home from './components/home';
import Qualification from './components/Qualification';
import SkillSection from './components/skillSection';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <ChakraProvider>
      {loading ? (
        <div className='min-h-screen bg-black w-full flex items-center justify-center'>
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            visible={true}
          />
        </div>
      ) : (
        <div>
          <Home />
        </div>
      )}
    </ChakraProvider>
  );
}

export default App;
