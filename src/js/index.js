/*O que precisamos fazer? - quando clicar no botão do perssonagem na lista
//temos que marcar o botão como selecionado e mostrar o personagem correspondente
/*OBJETIVO 1 - quando clicar no botão do personagem na lista, mascar o botão como selecionado
passo 1- pegar os botões no JS pra pode verificar quando o usuário clicar em
em cima
passo 2- adicionar a classe "selecionado" no botão que o usuário clicou
passo 3- verificar se já existe um botão selecionado, se sim devemo remover a seleção dele

passo 2- adicionar a classe "selecionado" no personagem que o usúario selecionou
passo 3- verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 
*/
//OBJETIVO 1 - quando clicar no botão do personagem na lista, mascar o botão como selecionado
//passo 1- pegar os botões no JS pra pode verificar quando o usuário clicar em
//em cima
const botoes = document.querySelectorAll('.botao');

// Objetivo 2 - Quando clicar no botão do personagem mostrar as informações do personagem
// Passo 1 - Pegar os personagens no JS para poder mostrar ou esconder eles
const personagens = document.querySelectorAll(".personagem");

// Passo 2 - Adicionar a classe "selecionado" no personagem que o usuário selecionou
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    // Passo 3 - Verificar se já existe um botão selecionado, se sim devemos remover a seleção dele
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
      botaoSelecionado.classList.remove("selecionado");
    }

    // Passo 2 - Adicionar a classe "selecionado" no botão que o usuário clicou
    botao.classList.add("selecionado");

    // Passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    if (personagemSelecionado) {
      personagemSelecionado.classList.remove("selecionado");
    }

    // Passo 2 - Adicionar a classe "selecionado" no personagem que o usuário selecionou
    personagens[indice].classList.add("selecionado");
  });
});
''