function v() {
    let c = 0
    let fim = Number(window.document.getElementById('fim').value)
    let inicio = Number(window.document.getElementById('i').value)
    let passo = Number(window.document.getElementById('p').value)
    if (fim == 0 || inicio == 0) {
        document.getElementById('teste').innerHTML = 'impossivel contar se inicio ou fim estiverem vazios, menores que zero ou igual a zero'
    }
    else if (passo == 0 || passo < 0) {
        window.alert('o passo não pode ser igual a zero ou menor que zero, logo, será definido como um')
        passo = 1
        document.getElementById("teste").innerHTML = '\u{2B07}contando\u{2B07}<br/>'
        if (fim > inicio) {
            for (inicio; fim >= inicio;inicio += passo) {
                document.getElementById('teste').innerHTML += `\u{27A1}${inicio}`
                c += 1
                if (c % 10 == 0) {
                    document.getElementById("teste").innerHTML += '<br/>'
                }
            }
        }
        else {
            for (inicio; fim <= inicio;inicio -= passo) {
                document.getElementById('teste').innerHTML += `\u{27A1}${inicio}`
                c += 1
                if (c % 10 == 0) {
                    document.getElementById("teste").innerHTML += '<br/>'
                }
            }
        }
    }
    else {
        document.getElementById("teste").innerHTML = '\u{2B07}contando\u{2B07}<br/>'
        if (fim > inicio) {
            for (inicio; fim >= inicio;inicio += passo) {
                document.getElementById('teste').innerHTML += `\u{27A1}${inicio}`
                c += 1
                if (c % 10 == 0) {
                    document.getElementById("teste").innerHTML += '<br/>'
                }
            }
        }
        else {
            for (inicio; fim <= inicio;inicio -= passo) {
                document.getElementById('teste').innerHTML += `\u{27A1}${inicio}`
                c += 1
                if (c % 10 == 0) {
                    document.getElementById("teste").innerHTML += '<br/>'
                }
            }
        }
    }
    document.getElementById('teste').innerHTML += '\u{2705}'
}