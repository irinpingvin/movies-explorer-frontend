import {MAIN_API_URL, HEADERS} from "./constants";

class MainApi {
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
    });
  }

  signIn(userData) {
    return this.#handleServerResponse(fetch(`${this.#baseurl}/signin`, {
      method: 'POST',
      headers: this.#headers,
      credentials: 'include',
      body: JSON.stringify(userData)
    }));
  }

  saveMovie(movieInfo) {
    return this.#handleServerResponse(fetch(`${this.#baseurl}/movies`, {
      method: 'POST',
      headers: this.#headers,
      credentials: 'include',
      body: JSON.stringify(movieInfo)
    }));
  };
}

export const mainApi = new MainApi(MAIN_API_URL, HEADERS);