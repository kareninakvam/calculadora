function insert(number){
 var num = document.getElementById('resultado').innerHTML;
 document.getElementById('resultado').innerHTML = num + number;
}

function clean (){
    document.getElementById('resultado').innerHTML = "";
}