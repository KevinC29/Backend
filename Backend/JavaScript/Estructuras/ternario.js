let n = 8;
let r = (n > 0) ? 'Es Positivo' : 'Es Negativo';

let v = 'A';
let r2 = (v === 'a' || v === 'A') ? `${v} Es Vocal` 
: (v === 'e' || v === 'E') ? `${v} Es Vocal`
: (v === 'i' || v === 'I') ? `${v} Es Vocal`
: (v === 'o' || v === 'O') ? `${v} Es Vocal`
: (v === 'u' || v === 'U') ? `${v} Es Vocal`
: `${v} No es Vocal`;

console.log(r);