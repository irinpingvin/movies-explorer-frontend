const MOVIES_API_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const MAIN_API_URL = 'https://api.movies-explr.alyabeva.nomoredomains.work';
const HEADERS = {
  'Content-Type': 'application/json'
};

const savedMoviesList = [
  {
    id: 1,
    name: "Начало",
    duration: "2ч 28м",
    link: "https://www.soyuz.ru/public/uploads/files/5/7443840/1005x558_202008111354292a2200507c.jpg",
  },
  {
    id: 2,
    name: "Интерстеллар",
    duration: "2ч 49м",
    link: "https://hi-news.ru/wp-content/uploads/2014/11/inter_main.jpg",
  },
  {
    id: 3,
    name: "Побег из Шоушенка",
    duration: "2ч 49м",
    link: "https://i.ytimg.com/vi/kgAeKpAPOYk/maxresdefault.jpg",
  },
];

export {MOVIES_API_URL, MAIN_API_URL, HEADERS, savedMoviesList};