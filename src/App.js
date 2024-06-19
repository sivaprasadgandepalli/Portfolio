import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import { useState, useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';
import Qualification from './components/Qualification';
import SkillSection from './components/skillSection';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLoading(false) }, 1000);
  }, [])

  return (
    <ChakraProvider>
      {loading ? <div className='min-h-screen bg-black w-full flex items-center justify-center'>
        <Blocks
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div> : <Home />}
    </ChakraProvider>);
}
export default App;
