import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import NavigationPopup from "../NavigationPopup/NavigationPopup";

function App() {
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = React.useState(false);

  function handleMenuClick() {
    setIsNavigationPopupOpen(true);
  }

  function closeNavigationPopup() {
    setIsNavigationPopupOpen(false);
  }

  return (
    <div className="app">
      <div className="app__container">
        <Routes>
          <Route exact path="/" element={
            <>
              <Header isNavigationNeeded="true" onMenu={handleMenuClick}/>
              <Footer/>
            </>
          }>
          </Route>
        </Routes>
        <NavigationPopup isOpen={isNavigationPopupOpen} onClose={closeNavigationPopup}/>
      </div>
    </div>
  );
}

export default App;
