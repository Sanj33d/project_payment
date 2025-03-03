document.getElementById("form-cashout").style.display = "none";

// ui (add money, cashout)

document.getElementById("box-cashout").addEventListener("click", function(){
    document.getElementById("form-addmoney").style.display = "none";
    document.getElementById("form-cashout").style.display = "block";
})

document.getElementById("box-addmoney").addEventListener("click", function(){
    document.getElementById("form-cashout").style.display = "none";
    document.getElementById("form-addmoney").style.display = "block";
})