const nome = "Felipe Panzenhagen"
let nome2 = ""
let pessoaDefault = {
    nome: "Felipe" ,
    idade: "18" ,
    trabalho: "estudante de prog"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"]


let pessoas = [
    {
        nome: "Felipe" ,
        idade: "18" ,
        trabalho: "estudante de prog"
    },
    {
        nome: "Ceser" ,
        idade: "45" ,
        trabalho: "aposentado"
    }
];


function alterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}


function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("----------IMPRIMIR PESSOAS------------")
    pessoas.forEach((item) => {
        console.log("Nome:")
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "19",
    trabalho: "Maconheiro"
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome: "Maria Silva",
//     idade: "25",
//     trabalho: "UX/UI Designer",
// })

//recebeEalteraNome("JujuKranz");
//recebeEalteraNome("Maria Silva");

//alterarNome();