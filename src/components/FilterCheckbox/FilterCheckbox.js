function FilterCheckbox(props) {
  return (
    <div className="filter">
      <label className="filter__label">
        <input type="checkbox" name="filter-checkbox" className="filter__invisible-checkbox" checked={props.isShortMoviesNeeded} onChange={props.onCheckboxClick}/>
        <span className="filter__visible-checkbox"></span>
      </label>
      <p className="filter__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;