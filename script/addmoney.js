document.getElementById("form-cashout").style.display = "none";

// ui (add money, cashout)

document.getElementById("box-cashout").addEventListener("click", function(){
    document.getElementById("form-addmoney").style.display = "none";
    document.getElementById("form-cashout").style.display = "block";

    this.classList.add("bg-pink-100")
    document.getElementById("box-addmoney").classList.remove("bg-pink-100")
})

document.getElementById("box-addmoney").addEventListener("click", function(){
    document.getElementById("form-cashout").style.display = "none";
    document.getElementById("form-addmoney").style.display = "block";

    this.classList.add("bg-pink-100")
    document.getElementById("box-cashout").classList.remove("bg-pink-100")

})

// adding money by clicking 'add money' button

document.getElementById("btn-addmoney").addEventListener("click", function(event){
    event.preventDefault()

    const inpNum = document.getElementById("inp-num").value
    const inpPin = document.getElementById("inp-pin").value

    if (inpNum==="01954207977"){
        if (inpPin==="1234"){
            // alert("adding money.............");
            
            let amount = document.getElementById("inp-amount").value
            amount = parseInt(amount)
            let balance = document.getElementById("balance").innerText
            balance = parseInt(balance)
            let sum = amount + balance

            document.getElementById("balance").innerText = sum

        }
        else{
            alert("Pin incorrect")
        }
    }
    else{
        alert("Account Number bhu")
    }
})