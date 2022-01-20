
import './App.css';
import Cart from './components/Cart';

function App() {
  return (
    <div className="containers">
      <Cart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9H-kkisGIe8kvRaKRPNtMfQx97klVhJOSTg&usqp=CAU" price="$23.90" p2="$29.90" name="Pepperoni pizza"/>
      <Cart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhbuBpqIMHMHsFu7t0xTYgaU17_d3FvG2bg&usqp=CAU" price="$17.90" p2="$22.90" name="Tortellini"/>
      <Cart image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKI_5VYs0UnIsfZPVLxOWVGcaNmLNn3BOuw&usqp=CAU" price="$13.90" p2="$18.90" name="Strawberry cake"/>
    </div>
  );
}

export default App;
