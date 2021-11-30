
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import LandingPage from "./screen/landing/LandingPage"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MyNotes from './screen/MyNotes/MyNotes';
function App() {
  return (
    <BrowserRouter>
           <Header/>
           <main >
           <Routes>
           <Route path="/" element={<LandingPage/>} />
           <Route path="/mynotes" element={ <MyNotes/>} />
           </Routes>
           </main>
           
           <Footer/>
    </BrowserRouter>
  );
}
export default App;
