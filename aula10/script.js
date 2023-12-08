function clicar(){
//Criei uma função para o evento "clicar"


    var a = window.document.getElementById('area')
//criei uma variavel "a" e disse que ela é a div pelo id = "area"


    a.innerText = 'Você clicou!'
//coloquei a var "a" para quando receber o metodo onclick (alguem clicar em cima) ela aparecer "você clicou!"

    a.style.background = "red"
//quando eu clico a cor fica vermelho    


}


    function entrar(){
//função para o evento "entrar"
    
    var a = window.document.getElementById('area')
//criei uma variavel "a" e disse que ela é a div pelo id = "area"

    a.innerText = "Você entrou!"
//coloquei a var "a" para quando receber o metodo onmouseenter (passar o mouse em cima) ela aparecer "você entrou!"

}



    function sair(){
//função para o evento "sair"
    
    var a = window.document.getElementById('area')
//criei uma variavel "a" e disse que ela é a div pelo id = "area"

    a.innerText = "Você saiu!"
//coloquei a var "a" para quando receber o metodo onmouseout (tirar o mouse de cima) ela aparecer "você saiu!"

    a.style.background = "rgb(243, 239, 27)"

//quando o mouse sai de cima, ele volta a cor amarela

}
