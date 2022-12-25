class FooterBar extends HTMLElement {
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
                .footer-bar {
                    background-color: #0A071B;
                }
                .footer-bar p {
                    color: white;
                    font-size: 18px;
                    text-align: center;
                    padding: 10px;
                    margin: 0px;
                }
            </style>

            <div class="footer-bar">
                <p>Copyright by Tedy Khoirul Abidin, 2022</p>
            </div>
        `;
    }
};

customElements.define('footer-bar', FooterBar);