export function calculateWinner(squares) {
    let lines = []
    for (let i = 0; i < 7; i++) {
        let row1 = Math.floor(Math.random() * i);
        let row2 = Math.floor((Math.random() * i) + 1)
        let row3 = Math.floor((Math.random() * i) + 2);
        let line = [row1, row2, row3];
        lines.push(line)
    }

    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
  }
  
