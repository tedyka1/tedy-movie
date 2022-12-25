import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar";
import "./script/component/search-bar";
import "./script/component/movie-list";
import "./script/component/footer-bar";
import {
    init,
    search
} from './script/view/main.js'

document.addEventListener("DOMContentLoaded", search);
document.addEventListener("DOMContentLoaded", init);