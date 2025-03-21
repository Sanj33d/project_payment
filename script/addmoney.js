document.getElementById("form-cashout").style.display = "none";
document.getElementById("transaction-history").style.display = "none";

// clicking 'cash-out' section

document.getElementById("box-cashout").addEventListener("click", function(){
    document.getElementById("form-cashout").style.display = "block";
    document.getElementById("form-addmoney").style.display = "none";
    document.getElementById("transaction-history").style.display = "none";

    removeActive()
    this.classList.add("active")
})

// clicking 'add money' section
document.getElementById("box-addmoney").addEventListener("click", function(){
    document.getElementById("form-cashout").style.display = "none";
    document.getElementById("form-addmoney").style.display = "block";
    document.getElementById("transaction-history").style.display = "none";

    removeActive()
    this.classList.add("active")
})
// clicking button 'transaction'

document.getElementById("btn-transaction").addEventListener("click", function(){
    document.getElementById("transaction-history").style.display = "block";
    
    removeActive()
    this.classList.add("active")
})

// adding money by clicking 'add money' button

document.getElementById("btn-addmoney").addEventListener("click", function(event){
    event.preventDefault()

    const inpNum = document.getElementById("inp-num").value
    const inpPin = document.getElementById("inp-pin").value

    if (inpNum==="01954207977"){
        if (inpPin==="1234"){
            // alert("adding money.............");
            let balance = document.getElementById("balance").innerText
            balance = parseInt(balance)

            let amount = document.getElementById("inp-amount").value
            amount = parseInt(amount)
            if (amount < 1) {
                alert("Please add a valid amount")
            }
            else {
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
        }
        else{
            alert("Pin incorrect")
        }
    }
    else{
        alert("Account Number incorrect")
    }
})