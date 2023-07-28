var buttons = document.querySelectorAll(".card button")

var output = document.querySelector("#output")

var showtotal = document.querySelector("#show-total")

var totalprice = 0

var finalprice = document.querySelector("#final-price")

buttons.forEach(function(item){
    item.onclick = function(){
        totalprice +=  +(item.getAttribute("price"))
        output.innerHTML += item.textContent + " "


        if(output.innerHTML != ""){
            showtotal.style.display = "block"
           
        }
    }
    showtotal.onclick = function(){
finalprice.innerHTML = totalprice
    }
})




























