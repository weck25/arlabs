let statement = true ;

function Arlabs(statement){
    if (statement) {
        console.log("okay, time to break");

        const time = 3000;
        setTimeout(function(){
            console.log("okay back to class");
        }, time); 
    } else {
        console.log("not this at the moment")
    }
}
Arlabs(statement);