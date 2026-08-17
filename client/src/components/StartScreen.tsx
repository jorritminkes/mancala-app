export function StartScreen(props: any) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Mancala</h1>
      <p>Welkom bij het spel! Klik op de knop om te beginnen.</p>

      <button 
        onClick={props.goToGame}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Start Nieuw Spel
      </button>
    </div>
  );
}