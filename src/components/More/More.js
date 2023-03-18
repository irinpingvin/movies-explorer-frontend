function More(props) {
  function handleMoreMovies() {
    props.onMoreClick();
  }

  return (
    <section className="more">
      {props.moviesLeft > 0 ? (
        <button className="more-button" onClick={handleMoreMovies}>Ещё</button>
        ) : null}
    </section>
  );
}

export default More;