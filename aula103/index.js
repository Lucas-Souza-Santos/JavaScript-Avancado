/*Arrow Functions ou Funcçoes de seta*/

const soma = () => {
    let a = 10, b = 20, soma = a + b;
    console.log(soma);
};

soma();

const multiply = () => 
    {
        const a = () => {
            return 5;
        };
        console.log(a());
        const b = () => {
            return 6;
        }
        console.log(b());
        return a() * b();
    };

console.log(multiply());

