function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="filter__label">
        <input type="checkbox" name="filter-checkbox" className="filter__invisible-checkbox"/>
        <span className="filter__visible-checkbox"></span>
      </label>
      <p className="filter__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;