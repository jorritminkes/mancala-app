const BASE_URL = "http://localhost:8080/api/game";

// export interface BoardState {
//     stenenPerVakje: number[];
//     spelerAanZet: number;
//     spelAfgelopen: boolean;
//     winnaar: number | null ; // or (| null)?
// }

// export async function fetchStenen(): Promise<BoardState> {
//     const res = await fetch(BASE_URL);
//     if (!res.ok) throw new Error("Niet gelukt het bord op te halen");
//     return res.json();
// }

// export async function startNewGame(): Promise<BoardState> {
//     const res = await fetch(`${BASE_URL}/new`, { method: "POST" });
//     if (!res.ok) throw new Error("Failed to start new game");
//     return res.json();
// }

// export async function playMove(pocketPositie: number): Promise<BoardState> {
//   const res = await fetch(`${BASE_URL}/move/${pocketPositie}`, { method: "POST" });
//   if (!res.ok) throw new Error(await res.text());
//   return res.json();
// }