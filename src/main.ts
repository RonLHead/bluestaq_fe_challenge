import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

/* 
  Function that makes API rest calls to poetrydb.org author and title endpoints.
  If either calls doesn't return a 200 status, the script consoles an error and returns null.
  If both endpoint calls are successfull, both sets of data are consoled and both datasets
  are returned as an array
*/

const fetchPoetry = async () => {
  try {
    const authorsResponse = await fetch('https://poetrydb.org/author');
    const titlesResposne = await fetch('https://poetrydb.org/title');
    
    if (!authorsResponse.ok || !titlesResposne.ok) {
      console.error(`HTTP error, status code: ${authorsResponse.status || titlesResposne.status}`);
      return null;
    }
      const authorsData = await authorsResponse.json();
      const titlesData = await titlesResposne.json();
  
      console.log("Authors API data: ", authorsData.authors)
      console.log("Titles API data: ", titlesData.titles);

      return [authorsData, titlesData];
  } catch (error) {
    console.error(`Error fetching poetry data: ${error}`);
    return null;
  }
};

await fetchPoetry();

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

