import aboutmePhoto from "../../images/aboutme__photo.png";

function AboutMe() {
  return (
    <section className="aboutme" id="about-me">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__boarder"></div>
      <div className="aboutme__content">
        <img src={aboutmePhoto} alt="Портрет студента" className="aboutme__photo"/>
        <p className="aboutme__name">Ирина</p>
        <p className="aboutme__job-position">DevOps инженер, 29 лет</p>
        <p className="aboutme__description">Я родилась в Астраханской области, но живу в Вологде, закончила электроэнергетический факультет ВоГУ. У меня есть парень и кошка. Я люблю путешествовать, веду блоги и изучаю английский язык. С 2013 по 2016 год работала программистом C++ в "R-Style Softlab", затем перешла в компанию "СберТех" и стала Java разработчиком. Последние пару лет работаю DevOps инженером.</p>
        <a className="aboutme__github-link" target="_blank" href="https://github.com/irinpingvin">Github</a>
      </div>
    </section>
  );
}

export default AboutMe;