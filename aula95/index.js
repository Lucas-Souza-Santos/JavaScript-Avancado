// var
    console.log("======= VAR =======");
    var numVar = 10;
    
    {var numVar = 100;}
    //o var não respeita o scopo local e sobe pra um nível mais elevado

    console.log(numVar);
// let
    console.log("====== LET =======");
    let numLet = 10;
    {
        let numLet = 100;
        console.log("Escopo filho de let\n", numLet);
    }
    console.log("Escopo Pai de let\n", numLet);
    console.log(numLet);
    // o let é restrigido ao escopo local e ao escopo do seus filhos

// const
    console.log("======= CONST ========");

    const numConst = 10;

    const primo = []

    for(let i = 1; i < 10; i++){
        primo.push((i) => 
        {
            cont = 0;
            if(i == 1){
                return i;
            }else{
                for(let j = 1; j < i; j++){
                    if(i % j == 0){
                        cont++;
                    }
                }
            }
            
            if(cont == 2){
                return i;
            }

        })
    }

    console.log(numConst);
    console.log(primo[0]);


