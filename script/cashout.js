document.getElementById("btn-cashout").addEventListener("click", function(event){
    event.preventDefault()

    const inpNum = document.getElementById("inp-num-cashout").value
    const inpPin = document.getElementById("inp-pin-cashout").value

    if (inpNum==="01954207977"){
        if (inpPin==="1234"){
            // alert("cashing out money.............");
            
            let balance = document.getElementById("balance").innerText
            balance = parseInt(balance)
            let amount = document.getElementById("amount-cashout").value
            amount = parseInt(amount)

            if (amount < 1) {
                alert("Please provide a valid amount")
            }
            else{
                sum = balance - amount
                if (amount>balance) {
                    alert("You don't have sufficient balance")
                }
                else {
                    document.getElementById("balance").innerText = sum

                    // transaction history
                    let p = document.createElement("p")
                    p.classList.add("text-center")
                    p.innerText = `
                    ${amount} taka cash out successful`

                    let parent = document.getElementById("transaction-history")
                    parent.appendChild(p)
            }
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