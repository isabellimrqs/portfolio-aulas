// // // 1) Conta Bancária
// class ContaBancaria {
//     constructor(saldo, tipo) {
//       this.saldo = saldo;
//       this.tipo = tipo;
//     }
  
//     sacar(valor) {
//       if (valor > this.saldo) {
//         console.log("Saldo insuficiente.");
//       } else {
//         this.saldo -= valor;
//         console.log(`Sacou ${valor} da conta ${this.tipo}.`);
//         console.log(`Saldo atual: ${this.saldo}`);
//       }
//     }
  
//     depositar(valor) {
//       this.saldo += valor;
//       console.log(`Depositou ${valor} na conta ${this.tipo}.`);
//       console.log(`Saldo atual: ${this.saldo}`);
//     }
//   }
  
//   class ContaCorrente extends ContaBancaria {
//     constructor(saldo) {
//       super(saldo, "corrente");
//     }
//   }
  
//   class ContaPoupanca extends ContaBancaria {
//     constructor(saldo) {
//       super(saldo, "poupança");
//     }
  
//     renderJuros(taxa) {
//       const juros = this.saldo * taxa;
//       this.depositar(juros);
//       console.log(`Juros de ${juros} renderizados na conta ${this.tipo}.`);
//     }
//   }
  

//   const minhaContaCorrente = new ContaCorrente(1500);
//   minhaContaCorrente.depositar(500);
//   minhaContaCorrente.sacar(100);
  
//   const minhaContaPoupanca = new ContaPoupanca(5000);
//   minhaContaPoupanca.depositar(100);
//   minhaContaPoupanca.renderJuros(0.15);


// //  // 2) Sistema de Livros
// class Livro {
//     constructor(nome, autor, identificador, categoria, quantidade) {
//       this.nome = nome;
//       this.autor = autor;
//       this.identificador = identificador;
//       this.categoria = categoria;
//       this.quantidade = quantidade;
//       this.emprestados = 0;
//     }
  
//     emprestar() {
//       if (this.quantidade > 0) {
//         this.quantidade--;
//         this.emprestados++;
//         console.log(`Livro "${this.nome}" foi emprestado.`);
//       } else {
//         console.log(`Não está disponível o livro: "${this.nome}".`);
//       }
//     }
  
//     devolver() {
//       if (this.emprestados > 0) {
//         this.quantidade++;
//         this.emprestados--;
//         console.log(`Livro "${this.nome}" devolvido.`);
//       } else {
//         console.log(`Não foi emprestado.`);
//       }
//     }
//   }
  
//   const livro1 = new Livro("Crepúsculo", "Stephanie Meyer", "482", "Romance", 4);
//   const livro2 = new Livro("Vermelho, Branco e Sangue Azul", "Taylor Reid", "965", "Romance LGBTQIA+", 1);
  
//   livro1.emprestar();
//   livro1.emprestar();
//   livro1.devolver();
  
//   livro2.emprestar();
//   livro2.devolver();
  

// // // 3) Autenticação de Usuário
// class Usuario {
//     constructor(username, senha) {
//       this.username = username;
//       this.senha = senha;
//       this.logado = false;
//     }
//   }
  
//   class Autenticacao {
//     constructor() {
//       this.usuarios = [];
//     }
  
//     registrar(username, senha) {
//       const novoUsuario = new Usuario(username, senha);
//       this.usuarios.push(novoUsuario);
//       console.log(`Usuário ${username} registrado.`);
//     }
  
//     fazerLogin(username, senha) {
//       const usuario = this.usuarios.find(user => user.username === username && user.senha === senha);
//       if (usuario) {
//         usuario.logado = true;
//         console.log(`Usuário ${username} logado.`);
//       } else {
//         console.log(`Credenciais inválidas.`);
//       }
//     }
  
//     fazerLogout(username) {
//       const usuario = this.usuarios.find(user => user.username === username);
//       if (usuario) {
//         usuario.logado = false;
//         console.log(`Usuário ${username} deslogado.`);
//       } else {
//         console.log(`Usuário não encontrado.`);
//       }
//     }
//   }

//   const sistemaAutenticacao = new Autenticacao();
  
//   sistemaAutenticacao.registrar("marisa", "0204");
//   sistemaAutenticacao.registrar("odair", "2010");
  
//   sistemaAutenticacao.fazerLogin("marisa", "0204");
//   sistemaAutenticacao.fazerLogin("odair", "2011");
  
//   sistemaAutenticacao.fazerLogout("marisa");
    