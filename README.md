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
    ```
    const notas = [60, 45, 78, 80, 32, 86]
    console.log(notas);
    ```   
- *saida*
    ```
    [ 60, 45, 78, 80, 32, 86 ]
    ```    
- *vetor com spread operator*
    ```
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
 * O forIn imprime as chaves ou index dos elementos
 * O forOF imprime os valores dos index de objetos iteraveis.

- Entradas
    ```
    const aluno = {nome: "Lucas", sobrenome: "Santos"};
    const nota_aluno = [80, 75, 92, 85]
    ```
    
- Loop FOR IN
    ```
    for(var dado in aluno){
        console.log(dado);
    }
    ```
- Saída
    ```
    nome
    sobrenome
    ```
- Loop FOR OF
    ```
    for(let item of aluno){
        console.log(item)
    }
    ```
- Saída
    ```
    80
    75
    92
    85
    ```
## Aula 100
    Parâmetros REST
    ```
    function soma(...num)
    {
        let res = 0;
        for(let item of num){
        res += item;
        }
        return res;
    }

    console.log(soma(3, 4, 6, 7, 8, 1, 4, 2));
    ```

## Aula 101

    Funções anonimas
    ```
    const soma = function(...num)
    {
        let res = 0;
        for(let item of num)
        {
            res += item;
        }
        return res;
    }

    console.log(soma(1, 2, 3, 4, 5));
    ```

## Aula 102
    Funções Construtoras

