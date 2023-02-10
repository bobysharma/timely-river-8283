import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import AllRoutes from './Component/Route/AllRoutes';
import { FloatingWhatsApp } from "react-floating-whatsapp";
 
function App() {
  return (
    <div className="App">
       <Navbar />
       <br />
       <br />
       <br />
        
      <AllRoutes />
      <FloatingWhatsApp
        phoneNumber="+918077832696"
        accountName="Open market "
        avatar="https://i.ibb.co/X8LJVX1/openlogo.png"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />   
       
    </div>
  );
}

export default App;
