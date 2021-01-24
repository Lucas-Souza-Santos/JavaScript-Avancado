# JavaScript-Avancado
Curso de JavaScript Avançando do canal CFB Cursos

## Aula 95
    diferença entre as formas de declarar variáveis no JavaScript
- *VAR*
- *LET*
- *CONST*

## Aula 96 
    Operador ternário

## Aula 97
    Operador Spread em javascript
- *vetor sem spread operator*
    ````
    const notas = [60, 45, 78, 80, 32, 86]
    console.log(notas);
    ```   
- *saida*
    ```
    [ 60, 45, 78, 80, 32, 86 ]
    ```    
- *vetor com spread operator*
    ````
    const notas = [60, 45, 78, 80, 32, 86]
    console.log(notas);
    ```
- *saída* 
    ```
    60 45 78 80 32 86
    ```
## Aula 98 
    Continuação da aula de Spread:
* Copiando um vetor
* Concatenando vetores
* Concatenando objetos

## Aula 99
    O forIn imprime as chaves ou index dos elementos e o forOF imprime os valores das chaves ou dos index.

* Entradas
    ```
    const aluno = {nome: "Lucas", sobrenome: "Santos"};
    const nota_aluno = [80, 75, 92, 85]
    ```
    
* Loop FOR IN
    ```
    for(var dado in aluno){
        console.log(dado);
    }
    ```
* Saída
    ```
    nome
    sobrenome
    ```
* Loop FOR OF
    ```
    for(let item of aluno){
        console.log(item)
    }
    ```
* Saída
    ```
    80
    75
    92
    85
    ```

