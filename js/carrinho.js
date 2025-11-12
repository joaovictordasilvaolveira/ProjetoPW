document.addEventListener('DOMContentLoaded', () => {
    const carrinhoContainer = document.querySelector('.carrinho-container');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const finalizarBtn = document.getElementById('finalizar-compra');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const cartCountEl = document.getElementById('cart-count');


function atualizarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  cartCountEl.textContent = totalItens;
  atualizarContadorCarrinho();
}
    

    function atualizarCarrinho() {
        carrinhoContainer.innerHTML = '';

        if (carrinho.length === 0) {
            carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
            subtotalEl.textContent = 'R$ 0,00';
            totalEl.textContent = 'R$ 0,00';
            return;
        }

        let subtotal = 0;

        carrinho.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-carrinho');

            itemDiv.innerHTML = `
        <div class="info-produto">
          <img src="${item.imagem}" alt="${item.nome}" width="80" height="80"/>
          <div>
            <h3>${item.nome}</h3>
            <p>${item.descricao || ''}</p>
            <p><strong>R$ ${item.preco.toFixed(2).replace('.', ',')}</strong></p>
          </div>
        </div>
        <div class="quantidade">
          <button class="diminuir" data-index="${index}">-</button>
          <span>${item.quantidade}</span>
          <button class="aumentar" data-index="${index}">+</button>
        </div>
      `;

            carrinhoContainer.appendChild(itemDiv);
            subtotal += item.preco * item.quantidade;
        });

        subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        totalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    }

    carrinhoContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('aumentar')) {
            const index = e.target.dataset.index;
            carrinho[index].quantidade++;
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            atualizarCarrinho();
        }

        if (e.target.classList.contains('diminuir')) {
            const index = e.target.dataset.index;
            if (carrinho[index].quantidade > 1) {
                carrinho[index].quantidade--;
            } else {
                carrinho.splice(index, 1);
            }
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            atualizarCarrinho();
        }
    });

    finalizarBtn.addEventListener('click', () => {
        const usuarioLogado = JSON.parse(localStorage.getItem('user'));
        

        if (!usuarioLogado || !usuarioLogado.logado) {
            alert('⚠️ Você precisa estar logado para finalizar a compra.');
            window.location.href = 'login.html';
            return;
        }

        if (carrinho.length === 0) {
            alert('Seu carrinho está vazio.');
            return;
        }

        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        const novoPedido = {
            id: Date.now(),
            usuario: usuarioLogado.email,
            itens: carrinho,
            total: carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0),
            data: new Date().toLocaleString('pt-BR')
        };

        pedidos.push(novoPedido);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));

        localStorage.removeItem('carrinho');
        alert("🎉 Sua compra foi realizada com sucesso! Obrigado por confiar na ColorUp 💚");
        window.location.href = 'index.html';
    });

    atualizarCarrinho();
    atualizarContadorCarrinho();
});
