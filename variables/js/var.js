function printNumbers () {
    for(var i = 0; i < 5; i++) {
        setTimeout(function(){
            console.log(i);
        }, i * 50);
    }

    console.log(i); // 5
}

printNumbers();
