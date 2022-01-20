import {JoinUs, Settings, ContactUs, Login, Search, Help,Download,Home,Button} from "./Button"

import "./App.css"

function App() {
  return (
    <div className="container">
    <h2>With multiple classes</h2>
    <div className="main">
    <JoinUs />  
    <Settings />
    <Login />
    <ContactUs />
    <Search />
    <Help />
    <Home />
    <Download />
    </div>
    <h2>With Single class</h2>
    <div className="main">
    <Button name="JOIN US"/>
     <Button name="SETTINGS"/>
     <Button name="LOGIN"/>  
     <Button name="CONTACT US"/>
     <Button name="SEARCH"/>
     <Button name="HELP"/>
     <Button name="HOME"/>
     <Button name="DOWNLOAD"/>
    </div>
    </div>

    
  )
}


export default App;
