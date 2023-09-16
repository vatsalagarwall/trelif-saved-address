import Navbar from './Components/Navbar';
import Main from './Components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddAddress from './Components/AddAddress';
import EditAddress from './Components/EditAddress';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          {/* <Route path="/address" element={<AddAddress />} /> */}
          <Route path="/editaddress" element={<EditAddress />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
