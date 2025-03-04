document.getElementById("btn-cashout").addEventListener("click", function(event){
    event.preventDefault()

    const inpNum = document.getElementById("inp-num-cashout").value
    const inpPin = document.getElementById("inp-pin-cashout").value

    if (inpNum==="01954207977"){
        if (inpPin==="1234"){
            // alert("cashing out money.............");
            
            let amount = document.getElementById("amount-cashout").value
            amount = parseInt(amount)
            let balance = document.getElementById("balance").innerText
            balance = parseInt(balance)

            sum = balance - amount
            document.getElementById("balance").innerText = sum
        }
        else{
            alert("Pin incorrect")
        }
    }
    else{
        alert("Account Number incorrect")
    }
})