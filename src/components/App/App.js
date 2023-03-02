import React from "react";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import NavigationPopup from "../NavigationPopup/NavigationPopup";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header/>
        <Footer/>
        <NavigationPopup/>
      </div>
    </div>
  );
}

export default App;
