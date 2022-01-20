
import './App.css';

import List from './components/List';

function App() {
  return (
    <div className="App">
      <List 
      h="Mobile operating system"
      a="Android"
      b="Blackberry"
      c="iPhone"    
      d="Windows Phone"
      />

 <List 
      h="Mobile Manufacturers"
      a="Samsung"
      b="HTC"
      c="Micromax"    
      d="Apple"
      />
    </div>
  );
}

export default App;
