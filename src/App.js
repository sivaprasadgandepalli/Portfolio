import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import { useState, useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLoading(false) }, 3000);
  }, [])
  return (
    <ChakraProvider>
      {loading ? <div className='min-h-screen bg-black w-full flex items-center justify-center'>
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </div> : <Home />}
    </ChakraProvider>);
}
export default App;
