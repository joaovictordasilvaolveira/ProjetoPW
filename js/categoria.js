document.addEventListener("DOMContentLoaded", () => {
  const listaCategorias = document.getElementById("lista-categorias");

    
  // Dados simulados (poderiam vir de um JSON futuramente)
  const categorias = [
    {
      nome: "Tintas para Paredes",
      produtos: [
        { nome: "Suvinil Toque Fosco Completo", preco: 129.9, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/303/image/display/34/1.webp?sv=2025-11-05&spr=https&st=2025-11-14T01%3A28%3A14Z&se=2025-11-15T01%3A33%3A14Z&sr=b&sp=r&sig=GWl827pvdHe1OZjrqISrGkccJGVerWRPCElF2SXJ7mY%3D" },
        { nome: "Suvinil Toque Fosco", preco: 132.9, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/305/image/display/34/1.webp?sv=2025-11-05&spr=https&st=2025-11-14T01%3A30%3A20Z&se=2025-11-15T01%3A35%3A20Z&sr=b&sp=r&sig=fkSgZ9uryntMFpqr91QjCO1hnOqIKLbMQ15eTHsYZ%2Fg%3D" },
        { nome: "Suvinil Rende & Cobre Muito", preco: 129.9, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/78/image/display/34/1.webp?sv=2025-11-05&spr=https&st=2025-11-14T00%3A44%3A57Z&se=2025-11-15T00%3A49%3A57Z&sr=b&sp=r&sig=7rxpK6BH6dG8h30EUhwv41AYdv88QjZtPK%2Bw%2Fg4Bbqo%3D" },
        { nome: "Suvinil Toque Seda", preco: 129.9, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/311/image/display/34/1.webp?sv=2025-11-05&spr=https&st=2025-11-14T00%3A56%3A41Z&se=2025-11-15T01%3A01%3A41Z&sr=b&sp=r&sig=Xg%2FaRuWuJqK3%2Fn2SQ2lD%2Bpyyt6r%2B8hXP9A8Bns7QYYg%3D" },
        { 
    nome: "Cimento Queimado",
    preco: 119.9,
    imagem: "https://iraja.com.br/products/cimento-queimado/25KG.png"
  },
  { 
    nome: "Esmalte Base Água",
    preco: 159.9,
    imagem: "https://iraja.com.br/products/esmalte-base-agua/3,6L.png"
  },
  { 
    nome: "Tinta Acrílica Premium",
    preco: 134.9,
    imagem: "https://iraja.com.br/products/tinta-acrilica-premium/18L.png"
  },
  { 
    nome: "Eucatex Acrílico Super Premium",
    preco: 169.9,
    imagem: "https://s3-sa-east-1.amazonaws.com/static.eucatex.aatb.com.br/Uploads/Produtos/Principal/8804-eucatex-acrilico-super-premium.jpg"
  },
  { 
    nome: "Eucatex Acrílico Super Pró",
    preco: 134.9,
    imagem: "https://s3-sa-east-1.amazonaws.com/static.eucatex.aatb.com.br/Uploads/Produtos/Principal/3967-eucatex-acrilico-super-pro.jpg"
  },
      ]
    },
    {
      nome: "Tintas para Madeiras",
      produtos: [
        { nome: "Esmalte Suvinil Cor & Proteção Acetinado Base Solvente", preco: 189.9, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/40/image/display/34/1.webp?sv=2025-11-05&spr=https&st=2025-11-14T01%3A56%3A25Z&se=2025-11-15T02%3A01%3A25Z&sr=b&sp=r&sig=Z3kqGd9AY4yf5tY22%2B%2BsqlLS5%2FKMbTcDgumKQ%2FXhySI%3D" },
        { nome: "Esmalte Suvinil Cor & Proteção Brilhante Base Água", preco: 129.9, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/37/image/display/34/1.webp?sv=2025-11-05&spr=https&st=2025-11-14T01%3A46%3A25Z&se=2025-11-15T01%3A51%3A25Z&sr=b&sp=r&sig=yZ98lRy53HcZa160A%2FsnXHS8rgeql9cFUjL2CoXPhUI%3D" },
        { nome: "Epóxi Base Água", preco: 129.9, imagem: "https://sherwin.com.br/wp-content/uploads/sites/11/2022/06/06-SW-Epoxi-Base-Agua-ECO-36L.png" },
        { nome: "Complementos para Madeira Fundo Branco Fosco", preco: 189.9, imagem: "https://sherwin.com.br/wp-content/uploads/sites/11/2022/06/complementos-para-madeira-fundo.png" },
        { nome: "Sparlack Cetol Stain Beleza Natural", preco: 129.9, imagem: "https://mkpcoral.vtexassets.com/arquivos/ids/586928-1600-auto?v=638493932908670000&width=1600&height=auto&aspect=true" },
        { nome: "Cetol Clastic", preco: 129.9, imagem: "https://www.lojacoral.com.br/arquivos/descriptionProduct-10_sparlack-cetol-classic_html-02a.png" }
      ]
    },
    {
      nome: "Tintas para Metais",
      produtos: [
        { nome: "Coralit Secagem Rápida Acetinado Branco", preco: 129.9, imagem: "https://mkpcoral.vtexassets.com/arquivos/ids/451782/Coral-Coralit-Secagem-Rapida-Galao.png?v=638385288743130000" },
        { nome: "Coralit Total Acetinado Branco", preco: 129.9, imagem: "https://mkpcoral.vtexassets.com/arquivos/ids/621737/Coral-Coralit-Total-Galao.png.png?v=638772073103630000" },
        { nome: "Esmalte Suvinil Cor & Proteção Grafite Fosco", preco: 129.9, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/42/image/display/34/1.webp?sv=2025-11-05&spr=https&st=2025-11-14T01%3A59%3A26Z&se=2025-11-15T02%3A04%3A26Z&sr=b&sp=r&sig=jMqqMvN%2FqsJ3LrBPCdrlCwxV2P1F0X6%2BWHK7txXMol4%3D" },
         { nome: "Super Galvite", preco: 129.9, imagem: "https://sherwin.com.br/wp-content/uploads/sites/11/2022/06/super-galvite.png" },
        { nome: "Esmalte Sintético Tradicional Fosco", preco: 129.9, imagem: "https://sherwin.com.br/wp-content/uploads/sites/11/2022/06/esmalte-sintetico-tradicional.png" }
      ]
    },
    {
      nome: "Acessórios de Pintura",
      produtos: [
        { nome: "Espatula Celuloide para Cimento Queimado", preco: 89.9, imagem: "https://decorcolorstintas.vtexassets.com/arquivos/ids/155403-1600-auto?v=638775553444500000&width=1600&height=auto&aspect=true" },
        { nome: "Garfo para pintura com rosca", preco: 49.9, imagem: "https://decorcolorstintas.vtexassets.com/arquivos/ids/158118-1600-auto?v=638846623944030000&width=1600&height=auto&aspect=true" },
        { nome: "Caçamba de mão com imã", preco: 59.9, imagem: " https://decorcolorstintas.vtexassets.com/arquivos/ids/158122-1600-auto?v=638846623739430000&width=1600&height=auto&aspect=true" },
        { nome: "Lixa telada 225mm", preco: 49.9, imagem: " https://decorcolorstintas.vtexassets.com/arquivos/ids/158164-1600-auto?v=638846622368500000&width=1600&height=auto&aspect=true" },
        { nome: "Espatula de quina", preco: 59.9, imagem: " https://decorcolorstintas.vtexassets.com/arquivos/ids/158148-1600-auto?v=638846622710770000&width=1600&height=auto&aspect=true" }
      ]
    }
  ];

  // Gera as seções de categoria dinamicamente
  listaCategorias.innerHTML = categorias.map(categoria => `
    <section class="categoria-bloco">
      <h2 .categoria-nome>${categoria.nome}</h2>
      <div class="produtos-grid">
        ${categoria.produtos.map(produto => `
          <div class="produto-card" data-produto='${JSON.stringify(produto)}'>
            <img src="${produto.imagem}" alt="${produto.nome}" >
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
