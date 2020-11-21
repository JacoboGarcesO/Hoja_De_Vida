//------Código para hacer el modo oscuro--------
const darkMode=document.getElementById("darkMode");
darkMode.addEventListener("click", ()=>{
    document.body.classList.toggle("bg-dark");
    document.getElementById("pag1").classList.toggle("bg-dark");
    document.getElementById("pag2").classList.toggle("bg-dark");
    document.getElementById("pag3").classList.toggle("bg-dark");

    document.getElementById("pag1").classList.toggle("text-light");
    document.getElementById("pag2").classList.toggle("text-light");
    document.getElementById("pag3").classList.toggle("text-light");

    document.getElementById("NavBar").classList.toggle("bg-dark");
    document.getElementById("aNav").classList.toggle("text-light");
    document.getElementById("aNav2").classList.toggle("text-light");

    document.getElementById("Habilidades").classList.toggle("text-light");

    
    if(document.body.classList.contains("bg-dark")){
        localStorage.setItem("dark-mode", "true")
    }else{
        localStorage.setItem("dark-mode", "false")
    }
});
if(localStorage.getItem("dark-mode")==="true"){
    document.body.classList.add("bg-dark");
    document.getElementById("pag1").classList.add("bg-dark");
    document.getElementById("pag2").classList.add("bg-dark");
    document.getElementById("pag3").classList.add("bg-dark");

    document.getElementById("pag1").classList.add("text-light");
    document.getElementById("pag2").classList.add("text-light");
    document.getElementById("pag3").classList.add("text-light");

    document.getElementById("NavBar").classList.add("bg-dark");
    document.getElementById("aNav").classList.add("text-light");
    document.getElementById("aNav2").classList.add("text-light");
    document.getElementById("Habilidades").classList.add("text-light");


}else{
    document.body.classList.remove("bg-dark");
    document.getElementById("pag1").classList.remove("bg-dark");
    document.getElementById("pag2").classList.remove("bg-dark");
    document.getElementById("pag3").classList.remove("bg-dark");

    document.getElementById("pag1").classList.remove("text-light");
    document.getElementById("pag2").classList.remove("text-light");
    document.getElementById("pag3").classList.remove("text-light");

    document.getElementById("NavBar").classList.remove("bg-dark");
    document.getElementById("aNav").classList.remove("text-light");
    document.getElementById("aNav2").classList.remove("text-light");
    
    document.getElementById("Habilidades").classList.remove("text-light");

}

//------Código para mostrar la fecha dinámica
const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();
document.getElementById("fecha").innerHTML=`${meses[f.getMonth()]} de ${f.getFullYear()}`;
