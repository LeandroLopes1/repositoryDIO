function VericaNumeros(num1, num2) {
    num1 === num2 ? console.log("Os números são iguais") : console.log("Os números são diferentes");
    sum = num1 + num2;
    console.log("A soma dos números é: " + sum);
    sum > 10 ? console.log("A soma dos números é maior que 10") : console.log("A soma dos números é menor que 10");
    sum < 20 ? console.log("A soma dos números é menor que 20") : console.log("A soma dos números é maior que 20");
}

VericaNumeros(1, 2);
