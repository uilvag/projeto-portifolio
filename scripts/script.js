// Seleciona o botão responsável por alternar o tema (claro/escuro)
const botao = document.getElementById('botao-tema');
// Seleciona o elemento body do documento HTML para aplicar classes de tema
const body = document.body;

// Persistência do tema: recupera o tema salvo no localStorage
const temasalvo = localStorage.getItem('tema');
// Aplica o tema escuro se o tema salvo for 'escuro', caso contrário, mantém o tema claro
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
// Recebe um parâmetro 'tipo' que é um booleano: true para escuro, false para claro
function temaEscuro(tipo) {
  // Se 'tipo' for true, adiciona a classe 'escuro' ao body e muda o ícone do botão para sol (representando mudança para claro)
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    // Caso contrário, remove a classe 'escuro' e muda o ícone para lua (representando tema escuro)
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

// Adiciona um ouvinte de evento ao botão para alternar o tema quando clicado
botao.addEventListener('click', () => {
  // Alterna a classe 'escuro' no body e retorna true se adicionada, false se removida
  const isescuro = body.classList.toggle('escuro');
  // Chama a função temaEscuro com o estado atual
  temaEscuro(isescuro);
  // Salva o tema atual no localStorage: 'escuro' se isescuro for true, 'claro' caso contrário
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
// Seleciona todos os links de navegação dentro do menu
const navLinks = document.querySelectorAll('#menu ul a.link');
// Para cada link, adiciona um ouvinte de evento de clique
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Previne o comportamento padrão do link (navegação imediata)
    e.preventDefault();
    // Seleciona o elemento alvo do link usando o atributo href
    const target = document.querySelector(this.getAttribute('href'));
    // Se o alvo existir, calcula a posição de scroll
    if (target) {
      // Obtém a altura do header para ajustar o scroll
      const headerHeight = document.querySelector('header').offsetHeight;
      // Calcula a posição alvo subtraindo a altura do header e um offset de 20px
      const targetPosition = target.offsetTop - headerHeight - 20;
      // Faz o scroll suave até a posição calculada
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});