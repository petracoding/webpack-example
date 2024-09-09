import "./main.scss"; // Imports all SCSS
import { doExample } from "./js/example.js"; // Imports the function doExample() from example.js so that we can use it

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = "It works!";
  doExample();
});
