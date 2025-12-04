  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];

  // ======== Gráfico Receitas X Despesas ========
  new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Receitas X Despesas',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: '#6C63FF',
        backgroundColor: 'rgba(108,99,255,0.2)',
        tension: 0.3, // suaviza a curva
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // ======== Gráfico Aplicações ========
  new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Aplicações',
        data: [10, 14, 6, 9, 12, 8],
        backgroundColor: '#6C63FF'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });