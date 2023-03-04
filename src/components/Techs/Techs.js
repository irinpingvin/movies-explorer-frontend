function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__boarder"></div>
      <div className="techs__content">
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__table">
          <p className="techs__items">HTML</p>
          <p className="techs__items">CSS</p>
          <p className="techs__items">JS</p>
          <p className="techs__items">React</p>
          <p className="techs__items">Git</p>
          <p className="techs__items">Express.js</p>
          <p className="techs__items">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;