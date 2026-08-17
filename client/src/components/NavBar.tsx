export function NavBar(props: any) {
  return (
    <nav style={{ 
      backgroundColor: '#333', 
      padding: '15px', 
      display: 'flex', 
      gap: '20px',
      justifyContent: 'center'
    }}>
      <button 
        onClick={props.goToStart}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Home
      </button>
      
      <button 
        onClick={props.goToGame}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Board
      </button>
    </nav>
  );
}