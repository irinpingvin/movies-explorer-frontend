import { Link } from "react-router-dom";
import ProfileLink from "../ProfileLink/ProfileLink";

function NavigationPopup(props) {
  return(
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClose}/>
        <div className="popup__navigation">
          <nav>
            <ul className="popup__navigation-links">
              <li className="popup__navigation-item">
                <Link className="popup__navigation-link" to="/">Главная</Link>
              </li>
              <li className="popup__navigation-item">
                <Link className="popup__navigation-link" to="/movies">Фильмы</Link>
              </li>
              <li className="popup__navigation-item">
                <Link className="popup__navigation-link" to="/saved-movies">Сохранённые фильмы</Link>
              </li>
            </ul>
          </nav>
          <ProfileLink/>
        </div>
      </div>
    </div>
  );
}

export default NavigationPopup;