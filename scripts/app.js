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

    document.getElementById("tituloQuienSoy").classList.toggle("bg-dark");
    document.getElementById("tituloQuienSoy").classList.toggle("text-light");
    
    document.getElementById("TextoQuienSoy").classList.toggle("bg-dark");
    document.getElementById("TextoQuienSoy").classList.toggle("text-light");

    document.getElementById("TituloHobbies").classList.toggle("bg-dark");
    document.getElementById("TituloHobbies").classList.toggle("text-light");

    document.getElementById("CuerpoCardsHobbies").classList.toggle("bg-dark");
    document.getElementById("CuerpoCardsHobbies").classList.toggle("text-light");
    
    document.getElementById("card1Hobbies").classList.toggle("bg-dark");
    
    document.getElementById("card2Hobbies").classList.toggle("bg-dark");

    document.getElementById("card3Hobbies").classList.toggle("bg-dark");

    document.getElementById("card4Hobbies").classList.toggle("bg-dark");
    
    document.getElementById("tituloActitudes").classList.toggle("bg-dark");
    document.getElementById("tituloActitudes").classList.toggle("text-light");
    
    document.getElementById("CuerpoCardsActidues").classList.toggle("bg-dark");
    document.getElementById("CuerpoCardsActidues").classList.toggle("text-light");
    
    document.getElementById("card1Actitudes").classList.toggle("bg-dark");
    document.getElementById("card2Actitudes").classList.toggle("bg-dark");
    document.getElementById("card3Actitudes").classList.toggle("bg-dark");
    
    document.getElementById("NavBar").classList.toggle("bg-dark");
    document.getElementById("aNav").classList.toggle("text-light");
    document.getElementById("aNav2").classList.toggle("text-light");
    document.getElementById("aNav3").classList.toggle("text-light");


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

    document.getElementById("tituloQuienSoy").classList.add("bg-dark");
    document.getElementById("tituloQuienSoy").classList.add("text-light");

    document.getElementById("TextoQuienSoy").classList.add("bg-dark");
    document.getElementById("TextoQuienSoy").classList.add("text-light");

    document.getElementById("TituloHobbies").classList.add("bg-dark");
    document.getElementById("TituloHobbies").classList.add("text-light");

    document.getElementById("CuerpoCardsHobbies").classList.add("bg-dark");
    document.getElementById("CuerpoCardsHobbies").classList.add("text-light");

    document.getElementById("card1Hobbies").classList.add("bg-dark");

    document.getElementById("card2Hobbies").classList.add("bg-dark");

    document.getElementById("card3Hobbies").classList.add("bg-dark");

    document.getElementById("card4Hobbies").classList.add("bg-dark");

    document.getElementById("tituloActitudes").classList.add("bg-dark");
    document.getElementById("tituloActitudes").classList.add("text-light");

    document.getElementById("CuerpoCardsActidues").classList.add("bg-dark");
    document.getElementById("CuerpoCardsActidues").classList.add("text-light");

    document.getElementById("card1Actitudes").classList.add("bg-dark");
    document.getElementById("card2Actitudes").classList.add("bg-dark");
    document.getElementById("card3Actitudes").classList.add("bg-dark");

    document.getElementById("NavBar").classList.add("bg-dark");
    document.getElementById("aNav").classList.add("text-light");
    document.getElementById("aNav2").classList.add("text-light");
    document.getElementById("aNav3").classList.add("text-light");

}else{
    document.body.classList.remove("bg-dark");
    document.getElementById("pag1").classList.remove("bg-dark");
    document.getElementById("pag2").classList.remove("bg-dark");
    document.getElementById("pag3").classList.remove("bg-dark");

    document.getElementById("pag1").classList.remove("text-light");
    document.getElementById("pag2").classList.remove("text-light");
    document.getElementById("pag3").classList.remove("text-light");

    document.getElementById("tituloQuienSoy").classList.remove("bg-dark");
    document.getElementById("tituloQuienSoy").classList.remove("text-light");

    document.getElementById("TextoQuienSoy").classList.remove("bg-dark");
    document.getElementById("TextoQuienSoy").classList.remove("text-light");

    document.getElementById("TituloHobbies").classList.remove("bg-dark");
    document.getElementById("TituloHobbies").classList.remove("text-light");

    document.getElementById("CuerpoCardsHobbies").classList.remove("bg-dark");
    document.getElementById("CuerpoCardsHobbies").classList.remove("text-light");

    document.getElementById("card1Hobbies").classList.remove("bg-dark");

    document.getElementById("card2Hobbies").classList.remove("bg-dark");

    document.getElementById("card3Hobbies").classList.remove("bg-dark");

    document.getElementById("card4Hobbies").classList.remove("bg-dark");

    document.getElementById("tituloActitudes").classList.remove("bg-dark");
    document.getElementById("tituloActitudes").classList.remove("text-light");

    document.getElementById("CuerpoCardsActidues").classList.remove("bg-dark");
    document.getElementById("CuerpoCardsActidues").classList.remove("text-light");

    document.getElementById("card1Actitudes").classList.remove("bg-dark");
    document.getElementById("card2Actitudes").classList.remove("bg-dark");
    document.getElementById("card3Actitudes").classList.remove("bg-dark");

    document.getElementById("NavBar").classList.remove("bg-dark");
    document.getElementById("aNav").classList.remove("text-light");
    document.getElementById("aNav2").classList.remove("text-light");
    document.getElementById("aNav3").classList.remove("text-light");

}

//------Código para mostrar la fecha dinámica
const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();
document.getElementById("fecha").innerHTML=`${meses[f.getMonth()]} de ${f.getFullYear()}`;
