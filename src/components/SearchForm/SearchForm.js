import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchFormIcon from "../../images/search-from__icon.svg"

function SearchForm(props) {
  const [searchRequest, setSearchRequest] = React.useState('');
  const [isShortMoviesNeeded, setIsShortMoviesNeeded] = React.useState(true);

  React.useEffect(() => {
    setSearchRequest('')
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchForm(searchRequest, isShortMoviesNeeded);
  }

  function handleSearchRequest(e) {
    setSearchRequest(e.target.value);
  }

  function handleCheckboxClick() {
    setIsShortMoviesNeeded(!isShortMoviesNeeded);
  }

  return (
    <section className="search">
      <form className="search__form" name="search-form" onSubmit={handleSubmit}>
        <div className="search__form-content">
          <img src={searchFormIcon} alt="Иконка лупы" className="search__form-icon"/>
          <input type="text" name="search" placeholder="Фильм" required className="search__input" value={searchRequest} onChange={handleSearchRequest}/>
          <button type="submit" className="search__button"></button>
          <div className="search__vertical-border"></div>
        </div>
        <FilterCheckbox isShortMoviesNeeded={props.isShortMoviesNeeded} onCheckboxClick={handleCheckboxClick}/>
      </form>
      <div className="search__border"></div>
    </section>
  );
}

export default SearchForm;