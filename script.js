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





// Teste das funções
notas = [10,10,8,4];
let mediaTeste = media(notas)
console.log(mediaTeste);
analiseMedia(mediaTeste);