document.addEventListener("DOMContentLoaded", () => {
  // Gráfico de Barras - Impacto Social por Região
  const barCanvas = document.getElementById("bar-chart");
  const barCtx = barCanvas.getContext("2d");

  const regioes = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"];
  const beneficiarios = [1200, 2500, 1800, 3200, 1500];
  const barColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  const barWidth = 80;
  const barSpacing = 100;
  const maxValue = Math.max(...beneficiarios);
  const chartHeight = 400;
  const chartBottom = 500;

  // Desenhar eixos
  barCtx.strokeStyle = "#333";
  barCtx.lineWidth = 2;
  barCtx.beginPath();
  barCtx.moveTo(50, 50);
  barCtx.lineTo(50, chartBottom);
  barCtx.lineTo(750, chartBottom);
  barCtx.stroke();

  // Desenhar barras
  beneficiarios.forEach((value, index) => {
    const barHeight = (value / maxValue) * chartHeight;
    const x = 80 + index * barSpacing;
    const y = chartBottom - barHeight;

    barCtx.fillStyle = barColors[index];
    barCtx.fillRect(x, y, barWidth, barHeight);

    barCtx.fillStyle = "#333";
    barCtx.font = "14px Arial";
    barCtx.textAlign = "center";
    barCtx.fillText(regioes[index], x + barWidth / 2, chartBottom + 20);
    barCtx.fillText(value, x + barWidth / 2, y - 10);
  });

  barCtx.save();
  barCtx.translate(20, 300);
  barCtx.rotate(-Math.PI / 2);
  barCtx.textAlign = "center";
  barCtx.fillText("Beneficiários", 0, 0);
  barCtx.restore();

  // Gráfico de Pizza - Distribuição de Recursos por Projeto
  const pieCanvas = document.getElementById("pie-chart");
  const pieCtx = pieCanvas.getContext("2d");

  const projetos = [
    { nome: "Educação Digital", valor: 35, cor: "#FF6384" },
    { nome: "Inclusão Tecnológica", valor: 25, cor: "#36A2EB" },
    { nome: "Programação para Jovens", valor: 20, cor: "#FFCE56" },
    { nome: "Capacitação Profissional", valor: 15, cor: "#4BC0C0" },
    { nome: "Outros Projetos", valor: 5, cor: "#9966FF" },
  ];

  const centerX = 300;
  const centerY = 250;
  const radius = 150;

  let currentAngle = -Math.PI / 2;

  // Desenhar fatias
  projetos.forEach((projeto) => {
    const sliceAngle = (projeto.valor / 100) * 2 * Math.PI;

    pieCtx.beginPath();
    pieCtx.fillStyle = projeto.cor;
    pieCtx.moveTo(centerX, centerY);
    pieCtx.arc(
      centerX,
      centerY,
      radius,
      currentAngle,
      currentAngle + sliceAngle
    );
    pieCtx.closePath();
    pieCtx.fill();

    // Bordas
    pieCtx.strokeStyle = "#fff";
    pieCtx.lineWidth = 2;
    pieCtx.stroke();

    currentAngle += sliceAngle;
  });

  // Legenda
  let legendY = 100;
  projetos.forEach((projeto) => {
    pieCtx.fillStyle = projeto.cor;
    pieCtx.fillRect(400, legendY, 20, 20);

    pieCtx.fillStyle = "#333";
    pieCtx.font = "14px Arial";
    pieCtx.textAlign = "left";
    pieCtx.fillText(`${projeto.nome} (${projeto.valor}%)`, 430, legendY + 15);

    legendY += 35;
  });

  // Gráfico de Linha - Evolução de Voluntários
  const lineCanvas = document.getElementById("line-chart");
  const lineCtx = lineCanvas.getContext("2d");

  const anos = ["2020", "2021", "2022", "2023", "2024", "2025"];
  const voluntarios = [50, 85, 120, 160, 200, 250];

  const lineChartWidth = 700;
  const lineChartHeight = 300;
  const lineChartBottom = 350;
  const lineChartLeft = 80;

  // Desenhar eixos
  lineCtx.strokeStyle = "#333";
  lineCtx.lineWidth = 2;
  lineCtx.beginPath();
  lineCtx.moveTo(lineChartLeft, 50);
  lineCtx.lineTo(lineChartLeft, lineChartBottom);
  lineCtx.lineTo(lineChartLeft + lineChartWidth, lineChartBottom);
  lineCtx.stroke();

  // Calcular pontos
  const maxVoluntarios = Math.max(...voluntarios);
  const xStep = lineChartWidth / (anos.length - 1);
  const points = voluntarios.map((value, index) => {
    const x = lineChartLeft + index * xStep;
    const y = lineChartBottom - (value / maxVoluntarios) * lineChartHeight;
    return { x, y, value };
  });

  // Desenhar linha
  lineCtx.strokeStyle = "#36A2EB";
  lineCtx.lineWidth = 3;
  lineCtx.beginPath();
  lineCtx.moveTo(points[0].x, points[0].y);
  points.forEach((point) => {
    lineCtx.lineTo(point.x, point.y);
  });
  lineCtx.stroke();

  // Desenhar pontos e rótulos
  points.forEach((point, index) => {
    // Ponto
    lineCtx.fillStyle = "#36A2EB";
    lineCtx.beginPath();
    lineCtx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
    lineCtx.fill();

    lineCtx.strokeStyle = "#fff";
    lineCtx.lineWidth = 2;
    lineCtx.stroke();

    // Rótulo do ano
    lineCtx.fillStyle = "#333";
    lineCtx.font = "14px Arial";
    lineCtx.textAlign = "center";
    lineCtx.fillText(anos[index], point.x, lineChartBottom + 25);

    // Valor
    lineCtx.fillText(point.value, point.x, point.y - 15);
  });

  // Título do eixo Y
  lineCtx.save();
  lineCtx.translate(30, 200);
  lineCtx.rotate(-Math.PI / 2);
  lineCtx.textAlign = "center";
  lineCtx.fillText("Número de Voluntários", 0, 0);
  lineCtx.restore();

  // Título do eixo X
  lineCtx.fillStyle = "#333";
  lineCtx.font = "14px Arial";
  lineCtx.textAlign = "center";
  lineCtx.fillText(
    "Ano",
    lineChartLeft + lineChartWidth / 2,
    lineChartBottom + 50
  );
});
