function myFunction(item) {
    let x = document.getElementById(item);
    if(x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
