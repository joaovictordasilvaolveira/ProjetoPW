document.addEventListener('DOMContentLoaded', () => {

    // Seleciona elementos da tela
    const carrinhoContainer = document.querySelector('.carrinho-container');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const finalizarBtn = document.getElementById('finalizar-compra');

    // Recupera o carrinho salvo no localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Contador no ícone do carrinho (topo)
    const cartCountEl = document.getElementById('cart-count');


    // Atualiza o número de itens ao lado do ícone do carrinho
    function atualizarContadorCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

        cartCountEl.textContent = totalItens;

        // ⚠️ Cuidado: você colocou a função chamando ela mesma (loop infinito)
        // Isso trava o navegador. Ideal seria remover essa linha abaixo:
        atualizarContadorCarrinho();
    }


    // Atualiza visualmente o carrinho exibido na página
    function atualizarCarrinho() {
        carrinhoContainer.innerHTML = '';

        // Caso não tenha itens no carrinho
        if (carrinho.length === 0) {
            carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
            subtotalEl.textContent = 'R$ 0,00';
            totalEl.textContent = 'R$ 0,00';
            return;
        }

        let subtotal = 0;

        // Cria cada item do carrinho dinamicamente
        carrinho.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-carrinho');

            // HTML com imagem, nome, preço, descrição e botões (+) e (-)
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

            // Soma o subtotal
            subtotal += item.preco * item.quantidade;
        });

        // Atualiza os valores na interface
        subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        totalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    }

    // Evento para aumentar ou diminuir quantidade de itens
    carrinhoContainer.addEventListener('click', (e) => {

        // Botão ➕ aumentar quantidade
        if (e.target.classList.contains('aumentar')) {
            const index = e.target.dataset.index;
            carrinho[index].quantidade++;

            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            atualizarCarrinho();
        }

        // Botão ➖ diminuir quantidade
        if (e.target.classList.contains('diminuir')) {
            const index = e.target.dataset.index;

            // Caso quantidade seja maior que 1, apenas diminui
            if (carrinho[index].quantidade > 1) {
                carrinho[index].quantidade--;

            } else {
                // Caso quantidade seja 1, remove o item do carrinho
                carrinho.splice(index, 1);
            }

            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            atualizarCarrinho();
        }
    });


    // Finalizar compra
    finalizarBtn.addEventListener('click', () => {
        const usuarioLogado = JSON.parse(localStorage.getItem('user'));

        // Verifica se usuário está logado
        if (!usuarioLogado || !usuarioLogado.logado) {
            alert('⚠️ Você precisa estar logado para finalizar a compra.');
            window.location.href = 'login.html';
            return;
        }

        // Caso carrinho esteja vazio
        if (carrinho.length === 0) {
            alert('Seu carrinho está vazio.');
            return;
        }

        // Criação do pedido
        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        const novoPedido = {
            id: Date.now(),
            usuario: usuarioLogado.email,
            itens: carrinho,
            total: carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0),
            data: new Date().toLocaleString('pt-BR')
        };

        // Salvar pedido
        pedidos.push(novoPedido);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));

        // Limpa carrinho
        localStorage.removeItem('carrinho');

        alert("🎉 Sua compra foi realizada com sucesso! Obrigado por confiar na ColorUp 💚");

        // Volta para home
        window.location.href = 'index.html';
    });

    // Renderiza tudo ao carregar
    atualizarCarrinho();
    atualizarContadorCarrinho(); // ⚠️ Mas isso trava por causa da função recursiva
});
