var btn= document.getElementById("btn")
  

btn.addEventListener ("click",function click(e){
    var a= document.getElementById("altu").value.replace (",",".")
    var p= document.getElementById("peso").value
    a= Number(a)
    p= Number(p)
    var url=""
   
   
    var imc= (p/(a*a));

    if (imc<18.5)
 {
     url ="abxpe.jpg"
 }
    else if (imc>= 18.5 && imc<=24.9)
{
    url="pN.jpg"
}
    else if (imc>=25)
{
    url="pA.jpg"
}
   
    var result= document.getElementById("result")
    result.innerText= "O resultado do seu IMC é: " + imc.toFixed(2)
    var form= document.getElementById("form")
    form.classList.add("none")
    var container= document.getElementById("container")
    container.classList.remove("none")
    var image= document.createElement("img")
    image.setAttribute("src", url)
    var div= document.getElementById("container")
    div.appendChild(image)
})
 