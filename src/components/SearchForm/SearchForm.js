import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchFormIcon from "../../images/search-from__icon.svg"

function SearchForm(props) {
  return (
    <section className="search">
      <form className="search__form" name="search-form" onSubmit={props.onSubmit}>
        <div className="search__form-content">
          <img src={searchFormIcon} alt="Иконка лупы" className="search__form-icon"/>
          <input type="search" name="search" placeholder="Фильм" className="search__input"/>
          <button type="button" className="search__button"></button>
          <div className="search__vertical-border"></div>
        </div>
        <FilterCheckbox/>
      </form>
      <div className="search__border"></div>
    </section>
  );
}

export default SearchForm;