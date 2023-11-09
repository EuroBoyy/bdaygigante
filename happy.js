let butao = document.getElementById("butao");

let texto = document.getElementById("texto");

let flag = false;
butao.addEventListener("click", (event)=>{
    if(!flag){
        texto.innerHTML= "Happy Bday GIGAAAAANTE!!!";
    }else{
        texto.innerHTML= "Desce até o fim da página!!!";
    }
    flag = !flag;
 
});