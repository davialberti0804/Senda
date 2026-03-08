function adicionarAoCarrinho(produto) {

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
 
  const msg = document.createElement("p");
  msg.textContent = `${produto} foi adicionado ao carrinho!`;
  msg.classList.add("sucesso");

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 3000);
}

const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {
  formCadastro.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const nome = document.getElementById("nome").value;

    const mensagensAntigas = document.querySelectorAll(".sucesso, .erro");
    mensagensAntigas.forEach((m) => m.remove());

    if (senha !== confirmarSenha) {
      const erro = document.createElement("p");
      erro.textContent = "As senhas não coincidem!";
      erro.classList.add("erro");
      formCadastro.appendChild(erro);
    } else {
      const sucesso = document.createElement("p");
      sucesso.textContent = `Cadastro realizado com sucesso! Bem-vinda(o), ${nome}.`;
      sucesso.classList.add("sucesso");
      formCadastro.appendChild(sucesso);

      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }
  });
}
