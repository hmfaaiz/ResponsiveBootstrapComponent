import Signup from "./components/SignupSignin/Signup"
import Signin from "./components/SignupSignin/Signin"
import Dashboard from "./Dashboard/Dashboard"
import { HashRouter, Route, Routes } from 'react-router-dom';
import Auth from "./Auth"
function App() {


return (
  <>
    
    <HashRouter> 
 
      <Routes>
       
        <Route path="/Signup" element={<Auth Component={Signup} />} />
        <Route path="/" element={<Auth Component={Signin} />} />
        <Route path="/Dashboard" element={<Auth Component={Dashboard} />} />
       
      </Routes>

    </HashRouter>
  </>
);
}

export default App;
