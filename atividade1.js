// 1
const idade = 20;
const resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(resultado);

// 2
const numero = 7;
const resultado1 = numero % 2 === 0 ? "Par" : "Ímpar";

console.log(resultado1);

// 3
const nota = 6.5;
const situacao = nota >= 7 
    ? "Aprovado" 
    : nota >= 5 
        ? "Recuperação" 
        : "Reprovado";

console.log(situacao);

// 4
const valorCompra = 120;
const valorFinal = valorCompra >= 100 
    ? valorCompra * 0.9 
    : valorCompra;

console.log(valorFinal);

// 5
const logado = false;
const mensagem = logado ? "Bem-vindo!" : "Faça login para continuar";

console.log(mensagem);

// 🔥 EXERCÍCIO BRABO
const usuarios = [
    { nome: "Ana", ativo: true },
    { nome: "Carlos", ativo: false },
    { nome: "Bruna", ativo: true }
];

const listaFormatada = usuarios.map(u => 
    `${u.nome} - ${u.ativo ? "Ativo" : "Inativo"}`
);

console.log(listaFormatada);
