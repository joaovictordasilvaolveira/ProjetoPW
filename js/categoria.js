document.addEventListener("DOMContentLoaded", () => {
  const listaCategorias = document.getElementById("lista-categorias");

    if (!logado) {
        alert("Você precisa estar logado para ver os detalhes do produto.");
        window.location.href = "login.html";
        return;
      }
  // Dados simulados (poderiam vir de um JSON futuramente)
  const categorias = [
    {
      nome: "Tintas para Interior",
      produtos: [
        { nome: "Tinta Acrílica Premium - 3,6L", preco: 129.9, imagem: "assets/produtos/tinta1.jpg" },
        { nome: "Tinta Suvinil Seda - 3,6L", preco: 132.9, imagem: "assets/produtos/tinta2.jpg" },
        { nome: "Tinta Coral Fosca - 3,6L", preco: 129.9, imagem: "assets/produtos/tinta3.jpg" }
      ]
    },
    {
      nome: "Tintas para Exterior",
      produtos: [
        { nome: "Tinta Epóxi Exterior - 3,6L", preco: 129.9, imagem: "assets/produtos/tinta4.jpg" },
        { nome: "Tinta Impermeável - 3,6L", preco: 129.9, imagem: "assets/produtos/tinta1.jpg" },
        { nome: "Tinta Premium Exterior - 3,6L", preco: 129.9, imagem: "assets/produtos/tinta2.jpg" }
      ]
    },
    {
      nome: "Tintas Especiais",
      produtos: [
        { nome: "Tinta Magnética - 3,6L", preco: 129.9, imagem: "assets/produtos/tinta3.jpg" },
        { nome: "Tinta Lousa - 3,6L", preco: 129.9, imagem: "assets/produtos/tinta4.jpg" },
        { nome: "Tinta Glow - 3,6L", preco: 129.9, imagem: "assets/produtos/tinta1.jpg" }
      ]
    },
    {
      nome: "Acessórios de Pintura",
      produtos: [
        { nome: "Kit Rolo Profissional", preco: 89.9, imagem: "assets/produtos/tinta2.jpg" },
        { nome: "Pincel Multiuso", preco: 49.9, imagem: "assets/produtos/tinta3.jpg" },
        { nome: "Bandeja de Pintura", preco: 59.9, imagem: "assets/produtos/tinta4.jpg" }
      ]
    }
  ];

  // Gera as seções de categoria dinamicamente
  listaCategorias.innerHTML = categorias.map(categoria => `
    <section class="categoria-bloco">
      <h2>${categoria.nome}</h2>
      <div class="produtos-grid">
        ${categoria.produtos.map(produto => `
          <div class="produto-card" data-produto='${JSON.stringify(produto)}'>
            <img src="${produto.imagem}" alt="${produto.nome}" width="150" height="150">
            <h3>${produto.nome}</h3>
            <span>R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `).join('');

  // Clique em produto → salva e vai pra produto.html
  document.querySelectorAll(".produto-card").forEach(card => {
    card.addEventListener("click", () => {
      const produto = JSON.parse(card.dataset.produto);
      localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
      window.location.href = "produto.html";
    });
  });
});
