
import './App.css'
//import Default from "./Components/Default.jsx";


//import Logo from './Components/Home/Logo.jsx';
//import Body from './Components/Home/Body.jsx';
//import Footer from './Components/Home/Footer.jsx';

import Home from './screens/Home.jsx';
import  Counter   from './Components/Counter/Counter.jsx';
import Product from './screens/Product.jsx';
function App() {
  return (
    <>
      <Home />
      <Counter />
      <Product />
    </>
  )
}

export default App;
