/*
In this problem, your job is to read three Portuguese words. These words define an animal according to the table below, from left to right. After, print the chosen animal defined by these three words.

O Gemini disse
Com certeza! Essa imagem é a base para o problema 1049 (Animal) do beecrowd. Aqui está a estrutura da árvore de decisão convertida em texto para facilitar o seu desenvolvimento:

1. Vertebrado
Ave

Carnívoro: águia

Onívoro: pomba

Mamífero

Onívoro: homem

Herbivoro: vaca

2. Invertebrado
Inseto

Hematófago: pulga

Herbivoro: lagarta

Anelídeo

Hematófago: sanguessuga

Onívoro: minhoca



Input
The input contains 3 words, one by line, that will be used to identify the animal, according to the above table, with all letters in lowercase.

Output
Print the animal name according to the given input.

Input Samples	
vertebrado
mamifero
onivoro
Output Samples
homem
*/

lines = ["invertebrado","anelideo","hematofago"]

const keyOne = String(lines[0])
const keyTwo = String(lines[1])
const keyThree = String(lines[2])

console.log(keyOne,keyTwo,keyThree )

const listAnimal = {
  vertebrado:{
    ave:{
      carnivoro:"aguia",
      onivoro:"pomba",
    },
    mamifero:{
      onivoro:"homem",
      herbivoro:"vaca"
    }
  },
  invertebrado:{
    inseto:{
      hematofago:"pulga",
      herbivoro:"lagarta",
    },

    anelideo:{
      hematofago:"sanguessuga",
      onivoro:"minhoca",
    }

  }
}

console.log(`${listAnimal[lines[0]][lines[1]][lines[2]]}`)