let i = 0;
let txt = "Log In";
let txt_id1 = document.getElementById("txt_id");
function play(){
    if(i < txt.length){
        txt_id1.innerHTML += txt[i];
        setTimeout(play,90);
        i++;
    }
}
