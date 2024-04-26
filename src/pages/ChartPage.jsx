import React from 'react';
import Chart from 'react-apexcharts';

const ChartPage = () => {
  // Dados exemplo em JSON para o gráfico
  const data = {
    series: [{
      name: "Exemplo de Dados",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      title: {
        text: 'Gráfico de Linha Simples',
        align: 'left'
      },
      xaxis: {
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set']
      }
    }
  };

  return (
    <div>
      <h1>Gráfico de Dados</h1>
      <Chart 
        options={data.options} 
        series={data.series} 
        type="line" 
        height={350} 
      />
    </div>
  );
};

export default ChartPage;
