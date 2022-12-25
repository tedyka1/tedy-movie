import './movie-detail';

class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'})
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            display: flex;
            flex: 25%;
            max-width: 20%;
            flex-direction: column;
            border: 1px solid white;
            border-radius: 14px;
            margin: 10px 10px 20px 10px;
            overflow: hidden;
            outline: none;
        }
        
        .movie-image {
            width: 100%;
            min-height: 400px;
            padding: 10px;
            overflow: hidden;
            position: relative;
            transition: 200ms ease-in-out transform;
        }
        
        .movie-image img {
            width: 100%;
            border-radius: 10px;
            object-fit: cover;
        }
        
        .movie-item:hover .movie-image {
            transform: scale(1.03);
        }
        
        .movie-header {
            color: white;
            padding: 0px 20px 0px 20px;
        }
        
        .movie-footer {
            margin: 10px;
            padding: 10px;
            border-top: 1px solid white;
        }
        
        .movie-footer button {
            position: relative;
            bottom: 0;
            width: 100%;
            font-size: 24px;
            padding: 14px;
            border-radius: 10px;
            background-color: #3D3762;
            color: white;
            cursor: pointer;
        }
        
        .movie-footer button:hover {
            transition: 0.4s;
            border: 1px solid white;
        }
        
        .movie-footer button:active {
            transform: scale(0.95);
        }
        </style>

        <div class="movie-item">
            <div class="movie-image">
                <img src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" alt="${this._movie.title} Poster">
            </div>
            <div class="movie-header">
                <h3 class="card-titte">${this._movie.title}</h3>
                <p class="card-subtitle">${this._movie.release_date.substring(0, 4)}</p>
            </div>
            <div class="movie-footer">
                <button class="button-detail" id="buttonDetail" type="button">Detail</button>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('movie-item', MovieItem);