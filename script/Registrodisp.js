/**
 * Função para voltar à página anterior no histórico do navegador
 */
  
  function voltar() {
      window.history.back();
    }


/**
 * Função chamada ao clicar no botão "avançar"
 * - Captura dados do usuário e dos campos do formulário
 * - Valida se os campos obrigatórios estão preenchidos
 * - Chama a função para registrar o dispositivo no backend
 * - Exibe mensagem de sucesso após o registro
 */
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

/**
 * Função assíncrona para enviar os dados do dispositivo para o backend via API REST
 * 
 * @param {string} usuario - Nome do usuário
 * @param {string} email - Email do usuário
 * @param {string} nome - Nome do dispositivo a ser registrado
 * @param {string} watt - Consumo em watts do dispositivo
 * @returns {Promise<object>} - Resposta da API ou objeto de erro
 */
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