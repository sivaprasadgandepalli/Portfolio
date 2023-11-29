import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
// import Projects from './components/projects';
// import Contact from './components/contact';
function App() {
  return (
    <ChakraProvider>
      <Home/>
      
    </ChakraProvider>);
}
export default App;
