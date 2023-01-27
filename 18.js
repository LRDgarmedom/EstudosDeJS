function v() {
    if (document.getElementById('num').value.length == 0) {
        window.alert('se estiver vazio não é possivel se calcular a tabuada')
    }
    else {
        document.getElementById('tabuada').innerHTML = null
        for (c = 0;c <= 10;c += 1) {
            let opt = document.createElement('option')
            opt.text = `${Number(document.getElementById('num').value)}x${c}=${c * Number(document.getElementById('num').value)}`
            document.getElementById('tabuada').appendChild(opt)
        }
    }
}