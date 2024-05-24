import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import LogIn from "./LogIn";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Faq />}>
          <Route index element={<ContactUs />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
//<ContactUs/>
   //<Faq/>
  // <SignUp/>  