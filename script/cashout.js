document.getElementById("btn-cashout").addEventListener("click", function(event){
    event.preventDefault()

    let amount = document.getElementById("amount-cashout").value
    amount = parseInt(amount)
    let balance = document.getElementById("balance").innerText
    balance = parseInt(balance)

    sum = balance - amount
    document.getElementById("balance").innerText = sum
})