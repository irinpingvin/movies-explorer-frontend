import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import { CurrentUserContext } from "../../contexts/currentUser/CurrentUserContext";
import {mainApi} from "../../utils/MainApi";

function App() {
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: ''
  });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.validateToken()
        .then(user => {
          setLoggedIn(true);
          setCurrentUser(user);
        })
        .catch(error => console.log(error));
    }
  }, [loggedIn]);

  function handleMenuClick() {
    setIsNavigationPopupOpen(true);
  }

  function closeNavigationPopup() {
    setIsNavigationPopupOpen(false);
  }

  function handleSavedMoviesSearch(searchRequest) {

  }

  function handleChangeUserInfo(userInfo) {
    mainApi.updateUserInfo(userInfo)
      .then(user => {
        setCurrentUser(user);
      })
      .catch(error => console.log(error));
  }

  function handleSignout() {
    mainApi.signOut()
      .then(() => {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
      })
      .catch(error => console.log(error));
  }

  function handleRegister(userData) {
    if (!userData.password || !userData.email || !userData.name)
      return;

    mainApi.signUp(userData)
      .then(() => navigate('/signin'))
      .catch(error => console.log(error));
  }

  function handleLogin(userData) {
    if (!userData.password || !userData.email)
      return;

    mainApi.signIn(userData)
      .then(res => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch(error => console.log(error));
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
                <Movies />
                <Footer/>
              </>
            }>
            </Route>
            <Route path="/saved-movies" element={
              <>
                <Header isNavigationNeeded={true} loggedIn={loggedIn} onMenu={handleMenuClick}/>
                <SavedMovies onSearchForm={handleSavedMoviesSearch} />
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
