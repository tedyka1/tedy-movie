import '../component/movie-list.js';
import '../component/search-bar.js';
import {
  DataSource,
  Main
} from '../data/data-source.js'

const search = () => {
  const searchElement = document.querySelector("search-bar");
  const movieListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = async () => {
      try {
          const result = await DataSource.searchMovie(searchElement.value);
          renderResult(result);
      } catch (message) {
          fallbackResult(message)
      }
  };

  const renderResult = results => {
      movieListElement.movies = results;
  };

  const fallbackResult = message => {
      movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

const init = () => {
  const movieListElement = document.querySelector("movie-list");

  const mainView = async () => {
      try {
          const result = await Main.fetchMovie();
          renderResult(result);
      } catch (message) {
          fallbackResult(message);
      }
  };

  const renderResult = results => {
      movieListElement.movies = results;
  };

  const fallbackResult = message => {
      movieListElement.renderError(message);
  };

  mainView();
}

export {
  init,
  search
}

