function removeActive() {
    let elems = document.getElementsByClassName("active")
    for (elem of elems) {
        elem.classList.remove("active")
    }
}