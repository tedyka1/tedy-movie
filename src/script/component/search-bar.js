class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchInput').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
              .search-container {
                display: flex;
                margin-bottom: 20px;
                background-color: #0A071B;
                border-radius: 20px;
            }
            .search-container .search-input {
                width: 500px;
                outline: none;
                padding: 12px;
                margin-right: 5px;
                border-radius: 10px;
                font-size: 20px;
                border: 1px solid #8C87A2;
            }
            .search-container .search-input:focus,
            .search-container .search-input:hover {
                box-shadow: 1px 1px 10px -1px white;
            }
            .search-container .search-button {
                font-size: 20px;
                color: white;
                background: transparent;
                border: 2px solid #8C87A2;
                border-radius: 10px;
                padding: 12px;
                cursor: pointer;
            }
            .search-container .search-button:hover {
                border: 2px solid white;
                box-shadow: 1px 1px 10px -1px white;
            }
            .search-container .search-button:active {
                transform: scale(0.98);
            }
            </style>

            <div class="search-container">
                <input type="text" placeholder="Search Movie" id="searchInput" class="search-input">
                <button type="button" id="searchButton" class="search-button">Search</button>
            </div>
        `;

        this.shadowDOM.querySelector('#searchButton').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);