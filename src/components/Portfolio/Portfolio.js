function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav>
        <ul className="portfolio__navigation">
          <li className="portfolio__navigation-item">
            <a className="portfolio__navigation-link" href="https://github.com/irinpingvin/how-to-learn" target="_blank" rel='noreferrer'>
              <p className="portfolio__navigation-title">Статичный сайт</p>
              <div className="portfolio__navigation-image"></div>
            </a>
          </li>
          <div className="portfolio__navigation-border"></div>
          <li className="portfolio__navigation-item">
            <a className="portfolio__navigation-link" href="https://github.com/irinpingvin/russian-travel" target="_blank" rel='noreferrer'>
              <p className="portfolio__navigation-title">Адаптивный сайт</p>
              <div className="portfolio__navigation-image"></div>
            </a>
          </li>
          <div className="portfolio__navigation-border"></div>
          <li className="portfolio__navigation-item">
            <a className="portfolio__navigation-link" href="https://github.com/irinpingvin/react-mesto-api-full" target="_blank" rel='noreferrer'>
              <p className="portfolio__navigation-title">Одностраничное приложение</p>
              <div className="portfolio__navigation-image"></div>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;