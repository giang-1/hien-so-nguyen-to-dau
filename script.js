let a = parseInt(prompt("nhập"))
let count = 0;
let b =0;
for(i =2 ; i < 1000;i++){
    for(j = 0 ; j <= i;j++){
        if( (i % j) == 0){ 
            b += 1
        }
    }
    if(b == 2){
        document.write(i + "<br>")
        count ++
        }
        b = 0;
    if(count == a){
        break;
    }
}



   













