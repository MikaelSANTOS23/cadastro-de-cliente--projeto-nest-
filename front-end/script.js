async function carregarCliente() {
    try {
      const resposta = await fetch("http://localhost:3000/cadastrodecliente");
      const produtos = await resposta.json();
  
      console.log("Cliente cadastrado:", produtos);
    } catch (erro) {
      console.error("Erro ao buscar cliente:", erro);
    }
  }
  
  // Função para enviar um novo produto para o back-end
  async function adicionarProduto() {
    const novoCliente = {
      name: 3,
      email: "Produto C",
      phonenumber: 300,
    };
  
    try {
      const resposta = await fetch("http://localhost:3000/cadastrodecliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoCliente),
      });
  
      const resultado = await resposta.json();
      console.log("Resposta do servidor:", resultado);
    } catch (erro) {
      console.error("Erro ao adicionar cliente:", erro);
    }
  }
  
  // Chamando as funções
  carregarCliente();
  adicionarCliente();
