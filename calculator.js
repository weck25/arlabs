const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;


let x = one + five;
let y = seven * nine;
let z = (x - y) / two;


function tambah (a,b){
    return a + b;
}

function kurang (a,b){
    return a - b;
}

function kali (a,b){
    return a * b;
}

function bagi (a,b){
    if (b === 0){
        return 'tidak bisa di bagi';
        } else {
        return a / b;
        }

}


let a = 0;
let b = 4;



console.log("tambah:"+tambah(a,b));
console.log('kurang:'+kurang(a,b));
console.log('kali:'+kali(a,b));
console.log('bagi:'+bagi(a,b));

