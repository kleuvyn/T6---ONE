// Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Boas vindas ao nosso site!');

// Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = 'Lua';

// Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

// Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

// Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

// Exiba um alerta com o texto "Erro! Preencha todos os campos."
let mensagemDeErro = 'Erro! Preencha todos os campos.';
alert(mensagemDeErro);

// Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos." Agora exiba um alerta com o valor da variável mensagemDeErro.
let nomeUsuario = prompt('Digite seu nome:');

// Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let idadeUsuario = prompt('Digite sua idade:');
if (idadeUsuario >= 18) {
    alert('Pode tirar a habilitação!');
}

// Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let diaSemana = prompt('Qual é o dia da semana?');
if (diaSemana === 'Sábado' || diaSemana === 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
let idadesUsuario = prompt('Digite sua idade:');
if (idadesUsuario >= 18) {
    alert('Pode tirar a habilitação!');
}

// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diasSemana = prompt('Qual é o dia da semana?');
if (diasSemana === 'Sábado' || diaSemana === 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um número:');
if (numero > 0) {
    alert('O número é positivo.');
} else if (numero < 0) {
    alert('O número é negativo.');
} else {
    alert('O número é zero.');
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt('Digite sua pontuação:');
if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 1500; 
alert(`Seu saldo disponível é de R$ ${saldo}.`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeDoUsuario = prompt('Digite seu nome:');
alert(`Olá, ${nomeDoUsuario}! Bem-vindo.`);

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contado = 10;
while (contado >= 0) {
    console.log(contado);
    contado--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numeros = prompt('Digite um número para iniciar a contagem regressiva:');
numeros = parseInt(numeros); 
while (numeros >= 0) {
    console.log(numeros);
    numeros--;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let num = prompt('Digite um número para contar até ele:');
num = parseInt(num); 
let contadores = 0;
while (contadores <= num) {
    console.log(contadores);
    contadores++;
}

// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Bem-vindo ao programa!');

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nom = 'Joana'; // Substitua 'Joana' pelo seu nome
console.log(`Olá, ${nom}!`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nnome = 'Joana';
alert(`Olá, ${nnome}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`A linguagem de programação preferida é ${linguagem}.`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 10;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valorUm = 15;
let valorDois = 8;
let resultados = valor1 - valor2;
console.log(`A diferença entre ${valorUm} e ${valorDois} é igual a ${resultados}.`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let ydade = prompt('Digite sua idade:');
if (ydade >= 18) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numbers = prompt('Digite um número:');
numbers = Number(numbers);
if (number > 0) {
    console.log('O número é positivo.');
} else if (numbers < 0) {
    console.log('O número é negativo.');
} else {
    console.log('O número é zero.');
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let  = 1;
while (medidor <= 10) {
    console.log(medidor);
    medidor++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 8;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroInt = Math.floor(Math.random() * 10) + 1;
console.log(`Número inteiro aleatório entre 1 e 10: ${numeroInt}`);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroInteiro = Math.floor(Math.random() * 1000) + 1;
console.log(`Número inteiro aleatório entre 1 e 1000: ${numeroInteiro}`);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
console.log(`Número inteiro aleatório entre 1 e 1000: ${numeroAleatorio}`);
