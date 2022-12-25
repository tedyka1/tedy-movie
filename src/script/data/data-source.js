import {
    baseUrl,
    API_KEY
} from "./api-config"

class DataSource {
  static searchMovie(keyword) {
      return fetch(`${baseUrl}/search/movie${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`)
          .then(response => {
              return response.json()
          })
          .then(responseJson => {
              if (responseJson.results && responseJson.total_results !== 0) {
                  return Promise.resolve(responseJson.results);
              } else {
                  return Promise.reject(`${keyword} is not found`)
              }
          })
  }
}

class Main {
  static fetchMovie() {
      return fetch(`${baseUrl}/movie/popular${API_KEY}`)
          .then(response => {
              return response.json()
          })
          .then(responseJson => {
              if (responseJson.results && responseJson.total_results !== 0) {
                  return Promise.resolve(responseJson.results);
              } else {
                  return Promise.reject(`movies not found`)
              }
          })
  }
}

export {
  DataSource,
  Main
};

