import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchFormIcon from "../../images/search-from__icon.svg"
import {useLocation} from "react-router-dom";
import {useFormWithValidation} from "../FormWithValidation/FormWithValidation";
import InputError from "../InputError/InputError";

function SearchForm(props) {
  const [isShortMoviesNeeded, setIsShortMoviesNeeded] = React.useState(true);
  const location = useLocation();
  const { values, setValues, handleChange } = useFormWithValidation({ search: '' });
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      const request = localStorage.getItem('searchRequest');
      const shortMovies = localStorage.getItem('shortMovies');

      if (request) {
        setValues({...values, search: request});
      }

      if (shortMovies != null) {
        setIsShortMoviesNeeded(shortMovies === 'true');
      }
    }
  }, [location.pathname]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.search) {
      setErrorMessage('Нужно ввести ключевое слово');
    } else {
      setErrorMessage('');
      props.onSearchForm(values.search, isShortMoviesNeeded);
    }
  }

  function handleCheckboxClick(e) {
    const checked = e.target.checked;
    setIsShortMoviesNeeded(checked);

    if (location.pathname === '/movies') {
      props.onCheckboxClick(checked);
    } else {
      props.onCheckboxClick(values.search, checked);
    }
  }

  return (
    <section className="search">
      <form className="search__form" name="search-form" onSubmit={handleSubmit} noValidate>
        <div className="search__form-content">
          <img src={searchFormIcon} alt="Иконка лупы" className="search__form-icon"/>
          <input type="text" name="search" placeholder="Фильм" required className="search__input" value={values.search} onChange={handleChange}/>
          <button type="submit" className="search__button"></button>
          <div className="search__vertical-border"></div>
        </div>
        <FilterCheckbox isShortMoviesNeeded={isShortMoviesNeeded} onCheckboxClick={handleCheckboxClick}/>
      </form>
      <InputError errorMessage={errorMessage} isSearchForm={true}/>
      <div className="search__border"></div>
    </section>
  );
}

export default SearchForm;