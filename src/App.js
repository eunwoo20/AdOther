import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import LogIn from "./LogIn";


function App() {
  return (

  
    <>
    <ToastContainer
      position="top-center"
      autoClose={3000} // Auto close after 5 seconds
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
    <Routes>
      <Route path="/" element={<ContactUs />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  </>
   
  );
}

export default App;
//<ContactUs/>
   //<Faq/>
  // <SignUp/>  