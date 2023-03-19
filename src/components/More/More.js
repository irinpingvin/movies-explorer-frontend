function More(props) {
  console.log(props.moviesLeft);
  return (
    <section className="more">
      {props.moviesLeft > 0 ? (
        <button className="more-button" onClick={props.onMoreClick}>Ещё</button>
        ) : null}
    </section>
  );
}

export default More;