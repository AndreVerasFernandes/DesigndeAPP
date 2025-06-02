window.onload = function () {
  const email = sessionStorage.getItem('email'); 
  const usuario = sessionStorage.getItem('usuario');      

  const apiUrl = 'https://apex.oracle.com/pls/apex/schooldesigndeapp/GETDISP/POST';

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ usuario, email })
  })
   .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    if (!Array.isArray(data)) {
      console.error('Resposta não é um array:', data);
      return;
    }

    // Popular tabela
    const tbody = document.querySelector('#devices-table tbody');
    tbody.innerHTML = ''; // limpa tabela

    const deviceNames = [];
    const deviceWatts = [];

    data.forEach(device => {
      // Cria uma linha da tabela
      const tr = document.createElement('tr');

      const tdNome = document.createElement('td');
      tdNome.textContent = device.nome;
      tr.appendChild(tdNome);

      const tdWatt = document.createElement('td');
      tdWatt.textContent = device.watt;
      tr.appendChild(tdWatt);

      tbody.appendChild(tr);

      // Prepara dados para o gráfico
      deviceNames.push(device.nome);
      deviceWatts.push(device.watt);
    });



      // Criar o Gráfico
      const ctx = document.getElementById('devicesChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: deviceNames,
          datasets: [{
            label: 'Watts Consumidos',
            data: deviceWatts,
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              ticks: { color: 'white' }
            },
            y: {
              ticks: { color: 'white' },
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              labels: { color: 'white' }
            }
          }
        }
      });

    })
    .catch(error => {
      console.error('Erro ao buscar dados da API:', error);
    });
};

function voltar() {
    window.history.back();
}