function removeActive() {
    let arr = document.getElementsByClassName("active")
    for (elem of arr) {
        elem.classList.remove("active")
    }
}