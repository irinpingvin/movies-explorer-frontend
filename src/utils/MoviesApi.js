import {MOVIES_API_URL, HEADERS} from "./constants";

class MoviesApi {
  #baseurl;
  #headers;

  constructor(baseurl, headers) {
    this.#baseurl = baseurl;
    this.#headers = headers;
  }

  #handleServerResponse(promise) {
    return promise.then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`)
    })
  }

  getMovies() {
    return this.#handleServerResponse(fetch(this.#baseurl), {headers: this.#headers})
  }
}

export const moviesApi = new MoviesApi(MOVIES_API_URL, HEADERS);