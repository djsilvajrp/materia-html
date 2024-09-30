

var variavel = 1

var string = "Essa variavel é do tipo string"
var int = 1
var boolean = true
var float = 1.5

console.log(variavel, typeof(variavel) )
console.log(string, typeof(string) )
console.log(int, typeof(int) )
console.log(boolean, typeof(boolean) )
console.log(float, typeof(float) )

console.log()
var x = '1'
var y = '2'

var resultado = x + y

console.log(resultado, typeof(resultado))


function mudar_cor() {
    var h1 = document.getElementById("texto")
    console.log(h1)
    h1.style = 'color:black'
}

function voltar_cor() {
    var h1 = document.getElementById("texto")
    console.log(h1)
    h1.style = 'color:green'
}
