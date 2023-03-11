import aboutMePhoto from "../../images/aboutme__photo.png";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__boarder"></div>
      <div className="about-me__content">
        <img src={aboutMePhoto} alt="Портрет студента" className="about-me__photo"/>
        <p className="about-me__name">Ирина</p>
        <p className="about-me__job-position">DevOps инженер, 29 лет</p>
        <p className="about-me__description">Я родилась в Астраханской области, но живу в Вологде, закончила электроэнергетический факультет ВоГУ. У меня есть парень и кошка. Я люблю путешествовать, веду блоги и изучаю английский язык. С 2013 работала программистом C++, Java, сейчас являюсь DevOps инженером.</p>
        <a className="about-me__link" target="_blank" href="https://github.com/irinpingvin" rel='noreferrer'>Github</a>
      </div>
    </section>
  );
}

export default AboutMe;