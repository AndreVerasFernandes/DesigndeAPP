  function voltar() {
      window.history.back();
    }

    function avancar() {
      const usuario = sessionStorage.getItem('usuario');
      const email = sessionStorage.getItem('email');
      const nome = document.getElementById('nome').value;
      const watt = document.getElementById('watt').value;

      if (!nome || !watt ) {
        alert('Por favor, preencha todos os campos.');
        return;
      }


      registrarDispositivo(usuario, email, nome, watt)

      alert('Registro realizado com sucesso!');
      
    }


  async function registrarDispositivo(usuario, email, nome, watt) {
  const baseUrl = 'https://apex.oracle.com/pls/apex/schooldesigndeapp/POSTDISP';
  const url = `${baseUrl}/${encodeURIComponent(usuario)}/${encodeURIComponent(email)}/${encodeURIComponent(nome)}/${encodeURIComponent(watt)}`;

  try {
    const response = await fetch(url, {
      method: 'POST'
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erro na requisição:', errorData);
      return errorData;
    }

    const data = await response.json();
    console.log('Dispositivo registrado com sucesso:', data);
    return data;
  } catch (error) {
    console.error('Erro na comunicação com o servidor:', error);
    return { erro: 'Erro de rede ou no servidor' };
  }
}