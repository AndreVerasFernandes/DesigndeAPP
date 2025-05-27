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



    function sair() {
      sessionStorage.setItem('isLoggedIn', 'false');
      sessionStorage.removeItem('usuario');
      sessionStorage.removeItem('email');
    checkLoginStatus();
    alert('Você foi deslogado.')
    window.location.href = 'home.html';
  }

    // Inicializa a verificação de login ao carregar a página
    window.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();

    });