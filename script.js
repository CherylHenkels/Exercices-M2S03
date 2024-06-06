// Exercicio 1
//let notas = []; // empty array
let notas = new Array(4).fill(0); // Using Array constructor I can create an array of length 4 with no initialized elements


// Função média
function media(notas){
    let mediaCalc =0;
   
    for(let i=0; i<notas.length; i++){
        mediaCalc += notas[i];
        console.log(mediaCalc);
    }

    mediaCalc = mediaCalc/notas.length;
    
    return mediaCalc;
}

// Exercicio 2
function analiseMedia(media){
    if(media>=7){
        document.write("Parabéns você passou na média! <br>")
    }
    else{
        document.write("Infelizmente você está de recuperação. <br>")
    }
}


// Exercício 3
function imprimirNomeAlunos(listaAlunos){
    listaAlunos.forEach(element => {
        document.write(element + "<br>");
    });
}

// Exercicio 4
function tabuada(){
    for(let i=0; i<=10; i++){
        document.write("8 x " + i + " = " + 8*i + "<br>");
    }
}

// Exercício 5
function informacoesAluno(){
    let nome = window.prompt("Qual o nome do aluno?");
    let idade = window.prompt("Qual a idade do aluno?");
    let serie = window.prompt("Qual a série do aluno?");
    let escola = window.prompt("Qual o nome da escola?");
    let materia = window.prompt("Qual a sua matéria favorita?");

    let confirma = window.confirm(`Você confirma as seguintes respostas? 
    Nome do aluno: ${nome} 
    Idade do aluno: ${idade} 
    Serie do aluno: ${serie} 
    Escola do aluno: ${escola} 
    Materia favorita do aluno: ${materia} `)

    if (confirma){
    document.write(   
        `<strong>Nome do aluno: </strong> ${nome} <br>
        <strong> Idade do aluno:</strong> ${idade} anos <br>
        <strong> Serie do aluno:</strong> ${serie}ª série<br>
        <strong> Escola do aluno:</strong> ${escola} <br>
        <strong> Materia favorita do aluno:</strong> ${materia} <br>`)
    } else{
        document.write("Os dados não foram confirmados")
    }
}


// Exercicio 6
function capturaNotas(){
    let nomeMateria = window.prompt("Digite o nome da matéria");
    let i = 0
    let notas = [];
    while(i< 4){
        notas[i] =parseFloat( window.prompt(`Digite a nota ${i + 1}`));
        i++;
    }

    let dadosMateria = {
        nomeMateria,
        notas
    };

    // document.write(`
    // <span>Matéria: <strong>${dadosMateria.nomeMateria}</strong></span><br>
    // <span>Notas: <strong>[${dadosMateria.notas.join(", ")}]</strong></span><br>
    // <span>media: <strong>[${media(dadosMateria.notas)}]</strong></span><br>`);

    
    return media(dadosMateria.notas);
}









// Teste das funções
notas = [10,10,8,4];
let mediaTeste = media(notas)
console.log(mediaTeste);
analiseMedia(mediaTeste);

let listaAlunos = ['Ana', 'Bruna', 'Carlos', 'Diego'];
imprimirNomeAlunos(listaAlunos);

tabuada();

// informacoesAluno();

console.log(capturaNotas());