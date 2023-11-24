function Fat(){
    let num = document.getElementById("fat").value;
    let fat = 1;
    for (let i = num; i > 0; i--) {
        fat *= i;
    }
    document.getElementById("fatorial").innerHTML = (`O fatorial de ${num} é ${fat}!`)
}