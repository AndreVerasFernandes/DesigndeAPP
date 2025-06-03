function abrirPerfil() {
      alert("Abrir perfil");
    }
    

    function abrirConfiguracoes() {
      alert("Abrir configurações");
    }

    function irParaConsumoMensal() {
      window.location.href = 'tabela.html';
    }

    function irParaDicas() {
      window.location.href = 'dicas.html';
    }

    function irParaRegistro() {
      window.location.href = 'index.html';
    }


    function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    }


/**
 * Realiza o logout do usuário
 * Limpa dados de sessão e redireciona para a página inicial
 */
    function sair() {
      sessionStorage.setItem('isLoggedIn', 'false');
      
      // Remove informações sensíveis armazenadas na sessão
      sessionStorage.removeItem('usuario');
      sessionStorage.removeItem('email');
    checkLoginStatus();
    alert('Você foi deslogado.')

    // Redireciona para a página inicial/home
    window.location.href = 'home.html';
  }

    // Inicializa a verificação de login ao carregar a página
    window.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();

    });