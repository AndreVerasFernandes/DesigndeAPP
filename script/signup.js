    function voltar() {
      window.history.back();
    }

/**
 * Função chamada ao clicar no botão "avançar" para registrar um novo usuário
 * - Captura os valores dos campos do formulário
 * - Valida se todos os campos foram preenchidos
 * - Verifica se as senhas coincidem
 * - Chama a função assíncrona para cadastrar o usuário na API
 * - Após o cadastro, exibe mensagem de sucesso e redireciona para a página inicial
 */
    function avancar() {
      const usuario = document.getElementById('usuario').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
      const confirmar = document.getElementById('confirmar').value;

      if (!usuario || !email || !senha || !confirmar) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      if (senha !== confirmar) {
        alert('As senhas não coincidem.');
        return;
      }
     
    cadastrarUsuario(usuario, email, senha)

      alert('Registro realizado com sucesso!');
      window.location.href = 'home.html';
    }
  
/**
 * Função assíncrona para realizar o cadastro do usuário via API REST
 * 
 * @param {string} usuario - Nome do usuário
 * @param {string} email - E-mail do usuário
 * @param {string} senha - Senha do usuário
 * @returns {Promise<void>} - Retorna uma Promise que resolve quando a requisição é concluída
 */

    async function cadastrarUsuario(usuario, email, senha) {
  try {
    // Monta a URL com os parâmetros
    const url = `https://apex.oracle.com/pls/apex/schooldesigndeapp/POSTUsuario/${encodeURIComponent(usuario)}/${encodeURIComponent(email)}/${encodeURIComponent(senha)}`;

    const resposta = await fetch(url, {
      method: "POST"
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      alert(dados.status); // Mensagem: "Usuário criado com sucesso"
    } else {
      alert("Erro ao cadastrar: " + (dados.erro || "Erro desconhecido"));
    }
  } catch (erro) {
    console.error("Erro na requisição:", erro);
    alert("Erro ao se conectar com o servidor.");
  }
}
