import "../css/index.css";

const successElement = document.createElement(`div`);
successElement.classList.add(`success-element`);
successElement.innerText = `Success, its working`;
document.body.appendChild(successElement);
