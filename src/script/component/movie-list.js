import './movie-item.js';

class MovieList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement('movie-item');
            movieItemElement.movie = movie;
            this.shadowDOM.appendChild(movieItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        .placeholder {
          font-weight: lighter;
          color: white;
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

}

customElements.define('movie-list', MovieList);