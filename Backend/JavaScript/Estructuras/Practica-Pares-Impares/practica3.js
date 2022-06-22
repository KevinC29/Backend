let pares = [], impares = [];
let nums = [1,2,3,4,5,6,7,8,9];
let numRandom = 0;

for (let aux of nums) {
    numRandom = parseInt(Math.random()*100);
    let ran = aux * numRandom;

    if (ran % 2 === 0) {
        console.log(`${aux} x ${numRandom} = ${ran}`);
        pares.push(ran);
    }else{
        console.log(`${aux} x ${numRandom} = ${ran}`);
        impares.push(ran);
    }
}

document.write('ARRAY - PARES==> [', pares, ']<br>');
document.write('ARRAY - IMPARES==> [', impares, ']');