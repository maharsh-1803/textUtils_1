import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  // const [alert, setalert] = useState(null);

  // const showAlert = (message,type)=>
  // {
  //   setalert({
  //     msg:message,
  //     type:type
  //   })
  // }
  return (
    <div className="App" >
      <Navbar title="Cars"/> 
      <Alert alert={alert}/>
      {/* <TextForm/> */}
      <About/>
    </div>
  );
}

export default App;
