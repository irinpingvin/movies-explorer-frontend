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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/currentUser/CurrentUserContext";
import {mainApi} from "../../utils/MainApi";

function App() {
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: ''
  });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = React.useState('');
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

  function handleChangeUserInfo(userInfo) {
    mainApi.updateUserInfo(userInfo)
      .then(user => {
        setCurrentUser(user);
        setSubmitErrorMessage('Данные успешно обновлены!');
      })
      .catch(error => {
        setSubmitErrorMessage(error);
      })
      .finally(() => {
        setTimeout(function() {
          setSubmitErrorMessage('');
        }, 4000);
      });
  }

  function handleSignout() {
    mainApi.signOut()
      .then(() => {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
      })
      .catch(error => setSubmitErrorMessage(error))
      .finally(() => {
        setTimeout(function() {
          setSubmitErrorMessage('');
        }, 4000);
      });
  }

  function handleRegister(userData) {
    mainApi.signUp(userData)
      .then(() => {
        handleLogin(userData);
      })
      .catch(error => setSubmitErrorMessage(error))
      .finally(() => {
        setTimeout(function() {
          setSubmitErrorMessage('');
        }, 4000);
      });
  }

  function handleLogin(userData) {
    const {password, email} = userData;

    mainApi.signIn({password, email})
      .then(res => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch(error => setSubmitErrorMessage(error))
      .finally(() => {
        setTimeout(function() {
          setSubmitErrorMessage('');
        }, 4000);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__container">
          <Routes>
            <Route exact path="/" element={
              <>
                <Header isNavigationNeeded={true} loggedIn={loggedIn} onMenu={handleMenuClick}/>
                <Main/>
                <Footer/>
              </>
            }>
            </Route>
            <Route path="/movies" element={
              <ProtectedRoute loggedIn={loggedIn} element={
                <>
                  <Header isNavigationNeeded={true} loggedIn={loggedIn} onMenu={handleMenuClick}/>
                  <Movies />
                  <Footer/>
                </>
              }>
              </ProtectedRoute>
            }>
            </Route>
            <Route path="/saved-movies" element={
              <ProtectedRoute loggedIn={loggedIn} element={
                <>
                  <Header isNavigationNeeded={true} loggedIn={loggedIn} onMenu={handleMenuClick}/>
                  <SavedMovies />
                  <Footer/>
                </>
              }>
              </ProtectedRoute>
            }>
            </Route>
            <Route path="/profile" element={
              <ProtectedRoute loggedIn={loggedIn} element={
                <>
                  <Header isNavigationNeeded={true} loggedIn={loggedIn} onMenu={handleMenuClick}/>
                  <Profile onChangeUserInfo={handleChangeUserInfo} onSignoutClick={handleSignout} errorMessage={submitErrorMessage}/>
                </>
              }>
              </ProtectedRoute>
            }>
            </Route>
            <Route path="/signup" element={
              <>
                <Header isNavigationNeeded={false} loggedIn={loggedIn}/>
                <Register onRegister={handleRegister} errorMessage={submitErrorMessage}/>
              </>
            }>
            </Route>
            <Route path="/signin" element={
              <>
                <Header isNavigationNeeded={false} loggedIn={loggedIn}/>
                <Login onLogin={handleLogin} errorMessage={submitErrorMessage}/>
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
