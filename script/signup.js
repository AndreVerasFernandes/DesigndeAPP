    function voltar() {
      window.history.back();
    }

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
