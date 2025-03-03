// login
document.getElementById("btn-login").addEventListener("click", function(event){
    event.preventDefault()
    const inputNumber = document.getElementById("input-number").value;
    const inputPin = document.getElementById("input-pin").value;

    // console.log(inputNumber, inputPin);
    if (inputNumber.length===11){
        if (parseInt(inputPin)===2358){
            window.location.href="login.html";
        }
        else{
            alert("Pin incorrect")
        }
    }
    else{
        alert("Account Number incorrect")
    }

})

