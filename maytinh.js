function forclear(){
    document.getElementById('output').innerHTML="0";
}
function removeZero(){
    let value=document.getElementById('output').innerHTML;
    if (value=="0") {
        value = " ";
        document.getElementById("output").innerHTML = value;
    }
}
function perc(){
    let value=document.getElementById("output").innerHTML;
    value=value/100;
    document.getElementById('output').innerHTML= value;
}
function fordisplay(value){
    removeZero();
    document.getElementById("output").innerHTML += value;
}
function solve(){
    removeZero();
    let pt = document.getElementById('output').innerHTML;
    let ketqua = eval(pt);
    document.getElementById("output").innerHTML = ketqua;
}
