document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("DOMContentLoaded", () => {
  const categoriaBtn = document.getElementById("btn-categorias");
  
  if (categoriaBtn) {
    categoriaBtn.addEventListener("click", () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      const logado = userData && userData.logado;
      
      if (!logado) {
        alert("Faça login para acessar as categorias.");
        window.location.href = "login.html";
        return;
      }

      window.location.href = "categoria.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const produtosBtn = document.getElementById("btn-produtos");
  
  if (produtosBtn) {
    produtosBtn.addEventListener("click", () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      const logado = userData && userData.logado;
      
      if (!logado) {
        alert("Faça login para acessar os produtos.");
        window.location.href = "login.html";
        return;
      }

      window.location.href = "produtos.html";
    });
  }
});



  const cartCountEl = document.getElementById('cart-count');

  if (cartCountEl) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    cartCountEl.textContent = totalItens;
  }

  const avatarDiv = document.getElementById("avatar");


  // Garante que o header e o avatar existem
  if (!avatarDiv) return;

  const userData = JSON.parse(localStorage.getItem("user"));

  // ===== USUÁRIO NÃO LOGADO =====
  if (!userData || !userData.logado) {
    // Mostra o bonequinho padrão
    avatarDiv.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg"
           width="24" height="24"
           fill="none" stroke="#121712"
           stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    `;
  }

  // ===== USUÁRIO LOGADO =====
 else {
  avatarDiv.textContent = userData.avatar || "??";
  avatarDiv.classList.add("avatar-logged");

  // Criar botão de logout
  const logoutBtn = document.createElement("button");
  logoutBtn.textContent = "Sair";
  logoutBtn.classList.add("logout");
  avatarDiv.insertAdjacentElement("afterend", logoutBtn);

  logoutBtn.addEventListener("click", () => {
    // Remove o usuário logado
    localStorage.removeItem("user");
    localStorage.removeItem("usuarios");
    localStorage.removeItem("produtoSelecionado");
    localStorage.removeItem("carrinho");

    // Opcional: remover itens do carrinho caso use carrinho vinculado ao usuário
    // localStorage.removeItem("carrinho");

    // Atualiza a página
    window.location.reload();
  });
}


 
});
