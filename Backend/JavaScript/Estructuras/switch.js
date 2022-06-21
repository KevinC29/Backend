let v = 'Z', out = '';

switch (v) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
        out = `${v} es Vocal`;
        break;
    default:
        out = `${v} No es una Vocal`;
        break;
}

console.log(out);