OBS:ASSIM:var num = []
var ma = 0
var me = 0
var soma = 0
var mostrar = document.createElement('p')
document.getElementById('mostrar').appendChild(mostrar)
function verificar() {
    var anum = Number(document.getElementById('num').value)
    confirmar = true
    if (anum > 100||anum < 1) {
        window.alert('é necessário que a caixa de seleção ao lado não esteja vazio e não seja um número menor que 1 e maior que 100')
    }
    else {
        for (c in num) {
            if (num[c] == anum) {
                window.alert('esse número já foi adicionado')
                confirmar = false
                break
            }
        }
    }
    if (confirmar) {
        soma += anum
        num.push(anum)
        var op = document.createElement('option')
        op.text = `O número ${anum} foi adicionado`
        document.getElementById('numeros').appendChild(op)
        mostrar.innerHTML = null
        document.getElementById('mostrar').appendChild(mostrar)
    }
}
function Results() {
    if (num.length == 0) {
        window.alert('é necesário adicionar ao menos um número')
    }else{
    for (c in num) {
        if (c == 0) {
            ma = num[c]
            me = num[c]
        }
        else {
            for (c1 in num) {
                if (num[c1] > ma) {
                    ma = num[c1]
                }
            }
            for (c1 in num) {
                if (num[c1] < me) {
                    me = num[c1]
                }
            }
        }
    }
        var tot = num.length
        var média = soma / tot
        mostrar.setAttribute('id', 'mos')
        mostrar.innerHTML = `total de números digitados:${tot}<br/><br/>maior:${ma}<br/><br/>menor:${me}<br/><br/>total:${soma}<br/><br/>média:${média}`
        document.getElementById('mostrar').appendChild(mostrar)
    }
}