// Dados do gráfico
const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [{
      label: "Dispositivos Manuais",
      data: [20, 45, 28, 80, 99, 43],
      borderColor: "rgba(255, 255, 255, 1)",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderWidth: 2,
      tension: 0.4
    }]
  };
  
  // Configuração do gráfico
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: {
            color: 'white'
          }
        },
        y: {
          ticks: {
            color: 'white'
          }
        }
      }
    }
  };
  
  // Criar gráfico
  const ctx = document.getElementById('lineChart').getContext('2d');
  new Chart(ctx, config);
  
  // Função para o botão de voltar
  document.querySelector('.back-button').addEventListener('click', function() {
    alert('Botão de voltar clicado');
  });
  