
import './App.css';
import Cart from './components/Cart';
import apple from './components/clipart23169.png'
import amazon from './components/clipart566833.png'


function App() {
  return (
    <div className="containers">
    <Cart date="28/10/2020" logo={amazon} heading="Amazon Gift" subheading="Pay" devices="Desktop - Mobile" backgroundColor={"orange"}/>
   
    <Cart date="28/10/2020" logo={amazon} heading="Amazon Gift" subheading="Pay" devices="Desktop - Mobile" backgroundColor={"orange"}/>

    <Cart date="17 Sep 2020" logo={apple} heading="Apple Gift" subheading="Payment" devices="MacOS - Mobile" backgroundColor={"whitesmoke"}/>
     </div>
  );
}

export default App;
