let angka = ['a','b','c','d'];
for (let i=0;i<angka.length;i++){
    if (angka[i]) {
        console.log('hallo '+angka[i]);
    }
    };
angka.forEach(function(angka){
    console.log('hallo '+angka);
    
});

//pyramid loop
const pyramidLoop = () =>{
    for (let i = 1; i <=5 ; i++) {
        for (let j = 1; j <= i *2 -1 ; j++ ) {
            process.stdout.write("*");
            }
            console.log("\n");
            }
            };
            pyramidLoop();
            