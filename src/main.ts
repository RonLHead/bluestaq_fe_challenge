import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// Rest call to title API endpoint
fetch("https://poetrydb.org/author/Emily Dickinson/title")
  .then((response) => {
    // If response status isn't 200, throw error
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    response.json()
      .then((titles) => {
        console.log("Titles results:");
        console.log(titles);
        return;
      })
});

// Rest call to author API endpoint
fetch('https://poetrydb.org/author')
  .then((response) => {
    // If response status isn't 200, throw error
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    response.json()
      .then((authors) => {
        console.log("Authors results:");
        console.log(authors);
        return;
      })
  })

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

