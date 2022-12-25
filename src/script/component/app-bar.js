class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render()
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
                display: block;
                width: 100%;
            }
            h1 {
                text-align: center;
                font-size: 34px;
                padding: 16px;
                color: white;
            }
            span {
                color: #8C87A2;
            }
            </style>

            <h1>Tedy <span>Movie</span></h1>
        `;
    }
};

customElements.define('app-bar', AppBar);