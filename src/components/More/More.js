function More(props) {
  return (
    <section className="more">
      {props.cards.length > 1 ? (
        <button className="more-button">Ещё</button>
        ) : null}
    </section>
  );
}

export default More;