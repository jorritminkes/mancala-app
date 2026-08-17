import { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { GamePage } from './components/GamePage';
import { NavBar } from './components/NavBar'; // 1. Import the new NavBar

export function App() {
  const [currentPage, setCurrentPage] = useState("start");

  function openStart() {
    setCurrentPage("start");
  }

  function openGame() {
    setCurrentPage("game");
  }

  let pageContent;
  
  if (currentPage === "start") {
    pageContent = <StartScreen goToGame={openGame} />;
  }
  
  if (currentPage === "game") {
    pageContent = <GamePage goToStart={openStart} />;
  }

  return (
    <div>
      <NavBar goToStart={openStart} goToGame={openGame} />

      <main>
        {pageContent}
      </main>
    </div>
  );
}

export default App;