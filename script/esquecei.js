function voltar() {
  window.history.back();
}

/**
 * Função chamada ao clicar no botão para atualizar a senha
 * - Captura os valores dos campos do formulário
 * - Valida se todos os campos foram preenchidos
 * - Verifica se as senhas coincidem
 * - Chama a função assíncrona para atualizar a senha na API
 * - Após a atualização, exibe mensagem de sucesso e redireciona para a página de login
 */
function avancar() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmar = document.getElementById('confirmar').value;

  if (!email || !senha || !confirmar) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (senha !== confirmar) {
    alert('As senhas não coincidem.');
    return;
  }

  atualizarSenha(email, senha);
}

/**
 * Função assíncrona para realizar a atualização da senha via API REST
 * 
 * @param {string} email - E-mail do usuário
 * @param {string} senha - Nova senha do usuário
 * @returns {Promise<void>} - Retorna uma Promise que resolve quando a requisição é concluída
 */
async function atualizarSenha(email, senha) {
  try {
    const url = 'https://apex.oracle.com/pls/apex/schooldesigndeapp/POSTUsuario/Esquecei';

    const resposta = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      alert(dados.status || 'Senha atualizada com sucesso!');
      window.location.href = 'home.html'; // Redireciona para página de login ou inicial
    } else {
      alert('Erro ao atualizar senha: ' + (dados.erro || 'Erro desconhecido'));
    }
  } catch (erro) {
    console.error('Erro na requisição:', erro);
    alert('Erro ao se conectar com o servidor.');
  }
}