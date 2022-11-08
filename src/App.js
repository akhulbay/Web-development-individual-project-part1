import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Container from "./Container";
import Footer from "./Footer";
import Registration from "./Registration";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/home' element={<Container/>}/>
                        <Route path='/sign-in' element={<Registration/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
  );
}

export default App;
