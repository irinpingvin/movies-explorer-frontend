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
      return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
    });
  }

  signIn(userData) {
    return this.#handleServerResponse(fetch(`${this.#baseurl}/signin`, {
      method: 'POST',
      headers: this.#headers,
      credentials: 'include',
      body: JSON.stringify(userData),
    }));
  }

  signUp(userData) {
    return this.#handleServerResponse(fetch(`${this.#baseurl}/signup`, {
      method: 'POST',
      headers: this.#headers,
      body: JSON.stringify(userData),
    }));
  }

  signOut() {
    return this.#handleServerResponse(fetch(`${this.#baseurl}/signout`, {
      method: 'POST',
      headers: this.#headers,
      credentials: 'include',
    }));
  }

  validateToken() {
    return this.#handleServerResponse(fetch(`${this.#baseurl}/users/me`, {
      headers: this.#headers,
      credentials: 'include',
    }));
  }

  updateUserInfo(userInfo) {
    return this.#handleServerResponse(fetch(`${this.#baseurl}/users/me`, {
      method: 'PATCH',
      headers: this.#headers,
      credentials: 'include',
      body: JSON.stringify(userInfo),
    }));
  }

  getMovies() {
    return this.#handleServerResponse(fetch(`${this.#baseurl}/movies`, {
      headers: this.#headers,
      credentials: 'include',
    }));
  }

  saveMovie(movieInfo) {
    return this.#handleServerResponse(fetch(`${this.#baseurl}/movies`, {
      method: 'POST',
      headers: this.#headers,
      credentials: 'include',
      body: JSON.stringify(movieInfo),
    }));
  };

  deleteMovie(id) {
    return this.#handleServerResponse(fetch(`${this.#baseurl}/movies/${id}`, {
      method: 'DELETE',
      headers: this.#headers,
      credentials: 'include',
    }));
  }
}

export const mainApi = new MainApi(MAIN_API_URL, HEADERS);