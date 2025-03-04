document.getElementById("form-cashout").style.display = "none";
document.getElementById("transaction-history").style.display = "none";

// clicking 'add money' button

document.getElementById("box-cashout").addEventListener("click", function(){
    document.getElementById("form-addmoney").style.display = "none";
    document.getElementById("form-cashout").style.display = "block";
    document.getElementById("transaction-history").style.display = "none";

    this.classList.add("bg-pink-100")
    document.getElementById("box-addmoney").classList.remove("bg-pink-100")
    document.getElementById("btn-transaction").classList.remove("bg-pink-100")
})

// clicking button 'cashout'
document.getElementById("box-addmoney").addEventListener("click", function(){
    document.getElementById("form-cashout").style.display = "none";
    document.getElementById("form-addmoney").style.display = "block";
    document.getElementById("transaction-history").style.display = "none";

    this.classList.add("bg-pink-100")
    document.getElementById("box-cashout").classList.remove("bg-pink-100")
    document.getElementById("btn-transaction").classList.remove("bg-pink-100")

})
// clicking button 'transaction'

document.getElementById("btn-transaction").addEventListener("click", function(){
    document.getElementById("transaction-history").style.display = "block";
    this.classList.add("bg-pink-100")
    
    document.getElementById("box-cashout").classList.remove("bg-pink-100")
    document.getElementById("box-addmoney").classList.remove("bg-pink-100")
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

            // transaction history
            let bank = document.getElementById("inp-bank").value

            let p = document.createElement("p")
            p.classList.add("text-center")
            p.innerText = `
            ${amount} taka added from ${bank} successfully`

            let parent = document.getElementById("transaction-history")
            parent.appendChild(p)
        }
        else{
            alert("Pin incorrect")
        }
    }
    else{
        alert("Account Number incorrect")
    }
})