function acaoBotao() {
    var numero, fatorial, contador
    numero = prompt("Digite o número: ")
    fatorial = 1

    for (contador = 1; contador <= numero; contador ++) {
        fatorial = fatorial * contador

}
    document.getElementById("paragrafo").innerText = "O fatorial de" + numero + " é: " + fatorial
}