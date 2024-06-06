// Exercicio 1
//let notas = []; // empty array
let notas = new Array(4).fill(0); // Using Array constructor I can create an array of length 4 with no initialized elements


// Função média
function media(notas){
    let mediaCalc =0;
   
    for(i=0; i<notas.length; i++){
        mediaCalc += notas[i];
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





// Teste das funções
notas = [10,10,8,4];
let mediaTeste = media(notas)
console.log(mediaTeste);
analiseMedia(mediaTeste);

let listaAlunos = ['Ana', 'Bruna', 'Carlos', 'Diego'];
imprimirNomeAlunos(listaAlunos);

tabuada();