import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import NavigationPopup from "../NavigationPopup/NavigationPopup";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { moviesList } from "../../utils/constants";

function App() {
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);

  React.useEffect(() => {
    setCards(moviesList);
    setSavedCards(moviesList);
  }, []);

  function handleMenuClick() {
    setIsNavigationPopupOpen(true);
  }

  function closeNavigationPopup() {
    setIsNavigationPopupOpen(false);
  }

  function handleSearchRequest(searchRequest) {
    // TODO
  }

  function handleCardSaved(card) {
    // TODO
  }

  function handleChangeUserInfo(userInfo) {
    // TODO
  }

  function handleSignout() {
    // TODO
  }

  function handleRegister(userData) {
    // TODO
  }

  function handleLogin(userData) {
    // TODO
  }

  return (
    <div className="app">
      <div className="app__container">
        <Routes>
          <Route exact path="/" element={
            <>
              <Header isNavigationNeeded="true" onMenu={handleMenuClick}/>
              <Main/>
              <Footer/>
            </>
          }>
          </Route>
          <Route path="/movies" element={
            <>
              <Header isNavigationNeeded={true} onMenu={handleMenuClick}/>
              <Movies onSearchForm={handleSearchRequest} cards={cards} onCardSaved={handleCardSaved}/>
              <Footer/>
            </>
          }>
          </Route>
          <Route path="/saved-movies" element={
            <>
              <Header isNavigationNeeded={true} onMenu={handleMenuClick}/>
              <SavedMovies onSearchForm={handleSearchRequest} cards={savedCards} onCardSaved={handleCardSaved}/>
              <Footer/>
            </>
          }>
          </Route>
          <Route path="/profile" element={
            <>
              <Header isNavigationNeeded={true} onMenu={handleMenuClick}/>
              <Profile onChangeUserInfo={handleChangeUserInfo} onSignoutClick={handleSignout}/>
            </>
          }>
          </Route>
          <Route path="/signup" element={
            <>
              <Header isNavigationNeeded={false}/>
              <Register onRegister={handleRegister}/>
            </>
          }>
          </Route>
          <Route path="/signin" element={
            <>
              <Header isNavigationNeeded={false}/>
              <Login onLogin={handleLogin}/>
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
