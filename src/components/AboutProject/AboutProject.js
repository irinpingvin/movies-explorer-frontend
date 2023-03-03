function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__boarder"/>
      <div className="about-project__content">
        <article className="about-project__table">
          <h3 className="about-project__content-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__content-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className="about-project__table">
          <h3 className="about-project__content-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__content-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about-project__schema">
        <figure className="about-project__figure about-project__figure_theme_backend">
          <p className="about-project__figure-title about-project__figure-title_theme_backend">1 неделя</p>
          <figcaption className="about-project__figure-caption">Back-end</figcaption>
        </figure>
        <figure className="about-project__figure about-project__figure_theme_frontend">
          <p className="about-project__figure-title about-project__figure-title_theme_frontend">4 недели</p>
          <figcaption className="about-project__figure-caption">Front-end</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default AboutProject;