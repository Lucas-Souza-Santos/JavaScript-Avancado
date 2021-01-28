const Carro = {
    marca: "VW",
    modelo: "Golf",
    info: function(){
        console.log("Marca...: " + this.marca);
        console.log("Modelo..: " + this.modelo);
    }
}

Carro.ano = 2012;

console.log(Carro);

const {marca, modelo, info} = Carro;
console.log(marca, modelo, info);

for(let valor in Carro){
    console.log(valor.valueOf());
}
