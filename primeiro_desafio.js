const precoEtanol = 3.9; // preço do Etanol
const precoGasolina = 5.9; // preço da Gasolina
const gastoCombustivel = 12; // consumo médio de combustível do veículo em km por litro
const distanciaViagem = 500; // distância da viagem em km
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaViagem / gastoCombustivel; // calcula a quantidade de litros de combustível consumidos na viagem

if (tipoCombustivel === 'Gasolina') {
    const valorViagem = litrosConsumidos * precoGasolina; // calcula o valor total da viagem
    console.log(`O valor da viagem é R$${valorViagem.toFixed(2)}.`); // imprime o valor da viagem formatado com duas casas decimais


} else {
    const valorViagem = litrosConsumidos * precoEtanol; // calcula o valor total da viagem
    console.log(`O valor da viagem é R$${valorViagem.toFixed(2)}.`); // imprime o valor da viagem formatado com duas casas decimais

}

// Cálculo do valor da viagem

