    function mostrarLogin() {
      document.querySelector('.start-screen').style.opacity = '0';
      setTimeout(() => {
        document.querySelector('.start-screen').style.display = 'none';
        document.getElementById('loginScreen').classList.add('show');
      }, 500);
    }
  async function login() {
      const email = document.getElementById('usuario').value;
      const pass = document.getElementById('senha').value;
    try {
    const resposta = await fetch("https://apex.oracle.com/pls/apex/schooldesigndeapp/GETUsuario/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        senha: pass
      })
    });

    const dados = await resposta.json();

    if (resposta.ok && dados.status === "sucesso") {
      alert("Login bem-sucedido. Bem-vindo, " + dados.usuario + "!");
      sessionStorage.setItem('usuario', dados.usuario);
      sessionStorage.setItem('email', dados.email);    
      window.location.href = 'inicio.html';
    } else {
      alert("Erro ao fazer login: " + dados.mensagem);
    }
  } catch (erro) {
    console.error("Erro de rede ou servidor:", erro);
    alert("Não foi possível conectar ao servidor.");
  }
}
