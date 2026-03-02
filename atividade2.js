// 1
const nomes = ["alice", "bruno", "carla", "daniel"];
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

console.log(nomesMaiusculos);

// 2
const numeros = [12, 5, 8, 130, 44, 3, 9];
const numerosPares = numeros.filter(num => num % 2 === 0);

console.log(numerosPares);

// 3
const precos = [29.9, 50.0, 10.5, 100.0];
const total = precos.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log(total);

// 4
const usuarios = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" },
    { id: 3, nome: "José", email: "jose@email.com" }
];

const nomesUsuarios = usuarios.map(usuario => usuario.nome);

console.log(nomesUsuarios);

// 5
const tarefas = [
    { id: 1, descricao: "Estudar React", concluida: true },
    { id: 2, descricao: "Configurar Webpack", concluida: false },
    { id: 3, descricao: "Entender Reduce", concluida: false }
];

const tarefasPendentes = tarefas.filter(tarefa => tarefa.concluida === false);

console.log(tarefasPendentes);

// 6
const produtos = [
    { id: 1, nome: "Teclado" },
    { id: 2, nome: "Mouse" },
    { id: 3, nome: "Monitor" }
];
const idParaRemover = 2;

const produtosAtualizados = produtos.filter(p => p.id !== idParaRemover);

console.log(produtosAtualizados);

// 7
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Beto", nota: 5.0 },
    { nome: "Caio", nota: 7.0 }
];

const alunosComStatus = alunos.map(aluno => {
    return {
    ...aluno,
    aprovado: aluno.nota >= 7 
    };
});

console.log(alunosComStatus);

// 8
const clientes = [
    { nome: "Lucas", email: "lucas@test.com", ativo: true },
    { nome: "Julia", email: "julia@test.com", ativo: false },
    { nome: "Marcos", email: "marcos@test.com", ativo: true }
];

const emailsAtivos = clientes
    .filter(c => c.ativo)      
    .map(c => c.email); 
    
console.log(emailsAtivos);

// 9
const carrinho = [
    { produto: "Notebook", preco: 4500.0, quantidade: 1 },
    { produto: "Mouse", preco: 150.0, quantidade: 2 },
    { produto: "Teclado", preco: 300.0, quantidade: 1 }
];

const totalCarrinho = carrinho.reduce((acc, item) => {
  const subtotal = item.preco * item.quantidade;
    return acc + subtotal;
}, 0);

console.log(totalCarrinho);

// 10
const desenvolvedores = [
    { nome: "Carlos", nivel: "Junior" },
    { nome: "Fernanda", nivel: "Senior" },
    { nome: "Ricardo", nivel: "Pleno" },
    { nome: "Elisa", nivel: "Junior" },
    { nome: "Gustavo", nivel: "Pleno" }
];

const contagemNiveis = desenvolvedores.reduce((acc, dev) => {
    const nivel = dev.nivel;
    
    acc[nivel] = (acc[nivel] || 0) + 1;
    
    return acc;
}, {}); 

console.log(contagemNiveis); 