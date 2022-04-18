canvas=document.getElementById("lienzo");
dibujo=canvas.getContext("2d");
pelotaancho=50;
pelotaalto=50;
pelotax=100;
pelotay=100;
oyox=400;
oyoy=400;
oyoancho=100;
oyoalto=100;
campo="verde.png";
pelota="pelota.png";
oyo="bandera.png";
function inisiar()
{
    ponerfondo=new Image();
    ponerfondo.onload=cargarfondo;
    ponerfondo.src=campo;
    ponerpelota=new Image();
    ponerpelota.onload=cargarpelota;
    ponerpelota.src=pelota; 
    poneroyo=new Image();
    poneroyo.onload=cargarbandera;
    poneroyo.src=oyo; 
}
function cargarfondo()
{
    dibujo.drawImage(ponerfondo,0,0,canvas.width,canvas.height);
 
}
function cargarpelota(){
    dibujo.drawImage(ponerpelota,pelotax,pelotay,pelotaancho,pelotaalto);
}
    function cargarbandera(){
        dibujo.drawImage(poneroyo,700,342,oyoancho,oyoalto);
    }
window.addEventListener("keydown", botones);
function botones (e){
    boton = e.keyCode;
    if((pelotax==740)&&(pelotay==400)){
        document.getElementById("mensaje").innerHTML="ganastes!!!";
    }
    else{

    if (boton=="38")
    {
        ariba();
    }
    if (boton=="40")
    {
        abajo();
    }
    if (boton=="37")
    {
        isquierda();
    }
    if (boton=="39")
    {
        derecha();
    }
}
}
function ariba(){

     if(pelotay>=0){
         pelotay=pelotay-10;
         cargarfondo();
         cargarbandera();
         cargarpelota();
     }

}
function abajo(){
    if(pelotay<=500){
        pelotay=pelotay+10;
       cargarfondo();
       cargarbandera();
       cargarpelota();
    }
}
function derecha(){
    if(pelotax<=1000)
        pelotax=pelotax+10;
        cargarfondo();
        cargarbandera();
        cargarpelota();
}
function isquierda(){
    if(pelotax>=0)
        pelotax=pelotax-10;
        cargarfondo();
        cargarbandera();
        cargarpelota();
        }


