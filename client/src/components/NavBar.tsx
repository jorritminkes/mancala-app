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
        onClick={props.gaNaarStart}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Home
      </button>
      
      <button 
        onClick={props.gaNaarSpel}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Board
      </button>
    </nav>
  );
}