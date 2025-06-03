  function voltar() {
      window.location.href = 'inicio.html';
    }

    function atualizar() {
      location.reload();
    }

    /**
 * Gera e baixa um arquivo PDF com as dicas de consumo
 */
    async function baixar() {
        // Importa o construtor jsPDF da biblioteca global carregada no HTML
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      const dicas = `
Dicas de Consumo:

1. Iluminação Eficiente:
- Substitua lâmpadas incandescentes e fluorescentes por LED.
- Aproveite ao máximo a luz natural durante o dia.
- Instale sensores de presença em áreas de passagem.
- Use cores claras nas paredes e tetos para refletir a luz.

2. Eletrodomésticos Inteligentes:
- Escolha eletrodomésticos com o Selo Procel de eficiência energética.
- Mantenha os aparelhos limpos e em bom estado de funcionamento.
- Desligue os aparelhos da tomada quando não estiverem em uso.
- Evite abrir a porta da geladeira com frequência e não coloque alimentos quentes dentro dela.

3. Climatização Consciente:
- Isole adequadamente paredes, telhados e janelas.
- Ajuste o termostato do ar-condicionado e aquecedor para temperaturas adequadas.
- Aproveite a ventilação natural para refrescar a casa.
- Mantenha os filtros do ar-condicionado limpos e faça a manutenção regular do sistema.
      `;

      // Define fonte padrão do documento (tipo e estilo)
      // Define o tamanho da fonte
      // Insere o texto no PDF, começando nas coordenadas (10, 10)
      // Dispara o download do arquivo PDF com o nome especificado
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text(dicas, 10, 10);
      doc.save("dicas-de-consumo.pdf");
    }
