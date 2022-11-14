import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Registration from "./components/Registration/Registration";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MoviesPage from "./components/MoviesPage/MoviesPage";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/home' element={<Container/>}/>
                        <Route path='/movies' element={<MoviesPage/>}/>
                        <Route path='/sign-in' element={<Registration/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
  );
}

export default App;
