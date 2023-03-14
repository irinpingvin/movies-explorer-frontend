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
import PageNotFound from "../PageNotFound/PageNotFound";
import { moviesList, savedMoviesList } from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/currentUser/CurrentUserContext";

function App() {
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: ''
  });
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    setCards(moviesList);
    setSavedCards(savedMoviesList);
    setCurrentUser({
      name: "Irina",
      email: "test@mail.ru"
    });
    setLoggedIn(true);
  }, []);

  function handleMenuClick() {
    setIsNavigationPopupOpen(true);
  }

  function closeNavigationPopup() {
    setIsNavigationPopupOpen(false);
  }

  function handleSearchRequest(searchRequest) {
  }

  function handleCardSaved(card) {
  }

  function handleChangeUserInfo(userInfo) {
  }

  function handleSignout() {
  }

  function handleRegister(userData) {
  }

  function handleLogin(userData) {
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__container">
          <Routes>
            <Route exact path="/" element={
              <>
                <Header isNavigationNeeded="true" loggedIn={loggedIn} onMenu={handleMenuClick}/>
                <Main/>
                <Footer/>
              </>
            }>
            </Route>
            <Route path="/movies" element={
              <>
                <Header isNavigationNeeded={true} loggedIn={loggedIn} onMenu={handleMenuClick}/>
                <Movies onSearchForm={handleSearchRequest} cards={cards} onCardSaved={handleCardSaved}/>
                <Footer/>
              </>
            }>
            </Route>
            <Route path="/saved-movies" element={
              <>
                <Header isNavigationNeeded={true} loggedIn={loggedIn} onMenu={handleMenuClick}/>
                <SavedMovies onSearchForm={handleSearchRequest} cards={savedCards} onCardSaved={handleCardSaved}/>
                <Footer/>
              </>
            }>
            </Route>
            <Route path="/profile" element={
              <>
                <Header isNavigationNeeded={true} loggedIn={loggedIn} onMenu={handleMenuClick}/>
                <Profile onChangeUserInfo={handleChangeUserInfo} onSignoutClick={handleSignout}/>
              </>
            }>
            </Route>
            <Route path="/signup" element={
              <>
                <Header isNavigationNeeded={false} loggedIn={loggedIn}/>
                <Register onRegister={handleRegister}/>
              </>
            }>
            </Route>
            <Route path="/signin" element={
              <>
                <Header isNavigationNeeded={false} loggedIn={loggedIn}/>
                <Login onLogin={handleLogin}/>
              </>
            }>
            </Route>
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
          <NavigationPopup isOpen={isNavigationPopupOpen} onClose={closeNavigationPopup}/>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
