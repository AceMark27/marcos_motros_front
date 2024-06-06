// Adicionar ao carrinho
function adicionarAoCarrinho() {
    alert('Carro adicionado ao carrinho!');
}

// Remover do carrinho
function removerDoCarrinho() {
    alert('Carro removido do carrinho!');
}

// Finalizar compra
function finalizarCompra() {
    alert('Compra finalizada!');
}
// Adicionar evento ao botão
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', adicionarAoCarrinho);
});
