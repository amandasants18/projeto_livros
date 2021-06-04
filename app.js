const livros = require("./database")

const pegarDados = require("readline-sync")

//preciso importar a ferramenta readline-sync

const ler = require("readline-sync")

//como fazer uma pergunta que vai ser respondida no terminal
const verLivrosPorCategoria = ler.question("Voce deseja encontrar livros por categoria(S/N)").toLocaleUpperCase()

//verificando a partir da 
if(verLivrosPorCategoria === "S"){ //transforma as entradas para maiscula

console.log("Essas são as opçòes disponiveis : ")
console.log("Romance, Auto-Ajuda, Fantasia")

const qualCategoria = ler.question("Qual categoria vc escolhe?").toLocaleUpperCase()

const cat = livros.filter(livro => livro.categoria.toLocaleUpperCase() === qualCategoria)

console.table(cat)

}else{

    console.table(livros)
}

const recomenda = ler.question("Me recomenda livros para ler? (S/N)").toLocaleUpperCase()

if (recomenda == "S") {

   const filtro = livros.filter(livr => livr.recomenda == true && livr.leu == true)

   console.table("Aqui estão os livros que já leu e que são recomendados : ")
   console.table(filtro)

}else{

    console.table("Não irei recomendar livros")
}

const livrosNaoLidos = livros.filter(livr => livr.leu == false)

console.table("Livros não lidos : ")
console.table(livrosNaoLidos)
