function calcular() {
    if (document.getElementById('num').value.length > 0){
        var num = Number(document.getElementById("num").value)
        tabuada.innerHTML = null 
        for (c = 0;c < 11;c += 1) {
            var option = document.createElement('option')
            option.text = `${c}X${num}=${c * num}`
            option.value = `tab${c}` //será util para o php, pois isso mostra se foi tab, seleção, 1, 2, 3, etc...
            document.getElementById("tabuada").appendChild(option)
        }
    }
    else {
        window.alert("o local de números não pode estar vazio")
    }
}