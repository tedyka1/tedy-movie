class MovieDetail extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'})
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    show() {
        this.shadowDOM.querySelector('#modalContainer').removeAttribute('hidden');
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                .modal-container {
                    position: fixed;
                    width: 100%;
                    height: auto;
                    bottom: 0;
                    top: 0;
                    left: 0;
                    right: 0;
                    padding: 0;
                    margin: 0;
                    background-color: rgba(0, 0, 0, 0.9);

                }
                
                .modal-content {
                    position: relative;
                    width: 600px;
                    top: 20px;
                    margin: 0px auto;
                    padding: 10px;
                    border-radius: 10px;
                    background-color: #0A071B;
                    border: 5px solid #3D3762;
                    color: white;
                }
                
                .modal-header {
                    color: white;
                    padding: 5px;
                    border-radius: 10px 10px 0px 0px;
                    font-size: 32px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    border-bottom: 2px solid #8C87A2;
                }
                
                .modal-body button {
                position: relative;
                float: right;
                width: 45px;
                padding: 10px;
                font-size: 20px;
                z-index: 10;
                top: -90px;
                left: 35px;
                border-radius: 50%;
                color: white;
                border: 1px solid #3D3762;
                background-color: #3D3762;
                cursor: pointer;
                }
                
                .modal-body button:hover {
                    transition: 0.2s;
                    transform: scale(1.1);
                }
                
                .modal-body button:active {
                    transform: scale(1);
                }
                
                .modal-body .article-movie {
                    display: flex;
                    flex-direction: row;
                    margin: 2px;
                }
                
                .modal-body p {
                    font-size: 14px;
                    margin: 0;
                }
                
                .article-movie img {
                    width: 300px;
                    height: 400px;
                    padding: 10px 10px 10px 0px;
                }
                
                .article-movie .article-title {
                    padding: 10px;
                }
                
                .article-title p {
                    font-size: 18px;
                }
                
                .article-title p:nth-child(2) {
                    margin-top: 14px;
                }
                
                .article-title p:nth-child(3) {
                    margin-top: 14px;
                }
                
                .article-title p:nth-child(4) {
                    margin-top: 14px;
                }

                @media (max-width: 640px) {
                    .modal-content {
                        top: 40px;
                        width: 300px;
                        height: 500px;
                        font-size: 12px;
                    }

                    .modal-header {
                        font-size: 18px;
                    }

                    .modal-body p {
                        font-size: 10px;
                    }

                    .article-movie img {
                        width: 150px;
                        height: 200px;
                        padding: 10px 10px 10px 0px;
                    }

                    .article-title p {
                        font-size: 12px;
                    }
                }
            </style>

            <div class="modal-container" id="modalContainer" hidden>
                <div class="modal-content">
                    <div class="modal-header">
                        ${this._movie.title}
                    </div>
                    <div class="modal-body">   
                        <button type="button" id="closeButton" class="close-button">X</button>
                        <div class="article-movie">
                            <div class="article-image">
                                    <img src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" alt="">
                            </div>
                             <div class="article-title">
                                <p>
                                    <b>Rate</b><br>
                                    ${this._movie.vote_average}
                                </p>
                                <p>
                                    <b>Release Date</b><br>
                                    ${this._movie.release_date}
                                </p>
                                <p>
                                    <b>Popularity</b><br>
                                    ${this._movie.popularity}</p>
                                </p>
                                <p>
                                    <b>Language</b><br>
                                    ${this._movie.original_language}
                                </p>
                            </div>
                        </div>
                        <p><b>Description :</b> <br>
                            ${this._movie.overview} lorem200
                        </p>
                    </div>
                </div>
            </div>
        `;

        const closeButton = this.shadowDOM.querySelector('#closeButton');
        closeButton.addEventListener('click', () => {
            this.shadowRoot.querySelector('#modalContainer').setAttribute('hidden', '')
        });
    }
}

customElements.define('movie-detail', MovieDetail);