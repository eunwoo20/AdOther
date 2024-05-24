import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import LogIn from "./LogIn";


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Faq />}>
        <Route index element={<Faq/>} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
//<ContactUs/>
   //<Faq/>
  // <SignUp/>  