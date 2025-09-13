// Datos del Anuario 2016
const tourismData = {
    enero: {
        arribos: 1381896,
        turistasEstables: 279415,
        pernoctaciones: 8661857,
        estadia: 6.27,
        gastoDiario: 523.75,
        gastoSinTransporte: 431.62,
        ocupacion: 75.30,
        usoAvion: 1.36,
        usoAuto: 78.33,
        usoOmnibus: 20.31
    },
    febrero: {
        arribos: 1218370,
        turistasEstables: 225258,
        pernoctaciones: 6532481,
        estadia: 5.36,
        gastoDiario: 583.82,
        gastoSinTransporte: 480.79,
        ocupacion: 67.97,
        usoAvion: 1.16,
        usoAuto: 77.89,
        usoOmnibus: 20.95
    },
    marzo: {
        arribos: 771527,
        turistasEstables: 77082,
        pernoctaciones: 2389537,
        estadia: 3.09,
        gastoDiario: 735.80,
        gastoSinTransporte: 577.77,
        ocupacion: 48.22,
        usoAvion: 1.16,
        usoAuto: 80.88,
        usoOmnibus: 17.96
    },
    abril: {
        arribos: 510009,
        turistasEstables: 29946,
        pernoctaciones: 898383,
        estadia: 1.76,
        gastoDiario: 842.69,
        gastoSinTransporte: 589.83,
        ocupacion: 25.15,
        usoAvion: 1.08,
        usoAuto: 81.77,
        usoOmnibus: 17.15
    },
    mayo: {
        arribos: 399218,
        turistasEstables: 17639,
        pernoctaciones: 546806,
        estadia: 1.40,
        gastoDiario: 889.41,
        gastoSinTransporte: 578.47,
        ocupacion: 16.18,
        usoAvion: 1.24,
        usoAuto: 83.24,
        usoOmnibus: 15.52
    },
    junio: {
        arribos: 396114,
        turistasEstables: 21404,
        pernoctaciones: 642126,
        estadia: 1.60,
        gastoDiario: 914.64,
        gastoSinTransporte: 613.59,
        ocupacion: 20.59,
        usoAvion: 1.15,
        usoAuto: 84.46,
        usoOmnibus: 14.39
    },
    julio: {
        arribos: 603034,
        turistasEstables: 39206,
        pernoctaciones: 1215372,
        estadia: 2.02,
        gastoDiario: 787.24,
        gastoSinTransporte: 558.04,
        ocupacion: 31.44,
        usoAvion: 0.98,
        usoAuto: 85.23,
        usoOmnibus: 13.79
    },
    agosto: {
        arribos: 504605,
        turistasEstables: 25733,
        pernoctaciones: 797712,
        estadia: 1.58,
        gastoDiario: 974.78,
        gastoSinTransporte: 650.94,
        ocupacion: 21.73,
        usoAvion: 1.16,
        usoAuto: 84.97,
        usoOmnibus: 13.87
    },
    septiembre: {
        arribos: 502034,
        turistasEstables: 25030,
        pernoctaciones: 750912,
        estadia: 1.50,
        gastoDiario: 1143.37,
        gastoSinTransporte: 763.94,
        ocupacion: 25.08,
        usoAvion: 1.38,
        usoAuto: 86.66,
        usoOmnibus: 11.95
    },
    octubre: {
        arribos: 661974,
        turistasEstables: 43031,
        pernoctaciones: 1333964,
        estadia: 1.95,
        gastoDiario: 1108.73,
        gastoSinTransporte: 772.71,
        ocupacion: 47.11,
        usoAvion: 0.98,
        usoAuto: 82.29,
        usoOmnibus: 16.74
    },
    noviembre: {
        arribos: 674180,
        turistasEstables: 42687,
        pernoctaciones: 1280621,
        estadia: 1.90,
        gastoDiario: 1106.49,
        gastoSinTransporte: 819.71,
        ocupacion: 39.61,
        usoAvion: 0.88,
        usoAuto: 86.29,
        usoOmnibus: 12.82
    },
    diciembre: {
        arribos: 829734,
        turistasEstables: 74966,
        pernoctaciones: 2323961,
        estadia: 2.71,
        gastoDiario: 987.02,
        gastoSinTransporte: 741.98,
        ocupacion: 39.47,
        usoAvion: 1.68,
        usoAuto: 86.07,
        usoOmnibus: 12.25
    }
};

// Datos de eventos especiales
const eventosData = {
    carnavales: {
        arribos: 288180,
        estadia: 3.65,
        gastoDiario: 669,
        giroEstimado: 704000000
    },
    semanaSanta: {
        arribos: 201206,
        estadia: 3.80,
        gastoDiario: 679,
        giroEstimado: 518000000
    },
    juegosEvita: {
        descripcion: "Juegos Evita + Juegos Bonaerenses",
        mes: "octubre",
        impacto: "Alto movimiento turístico"
    },
    juegosBonaerenses: {
        descripcion: "Juegos Bonaerenses",
        mes: "octubre",
        impacto: "Incremento en arribos y gastos"
    },
    finDeSemanaLargo: {
        descripcion: "Fines de semana largos",
        meses: ["marzo", "junio", "julio", "agosto", "octubre", "noviembre", "diciembre"],
        impacto: "Aumento en gastos de transporte"
    }
};

// Variables globales para los charts
let arrivalsChart, expensesChart, comparisonChart;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    populateMonthlyData();
    createCharts();
});

// Función para manejar las pestañas
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remover clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Agregar clase active al botón clickeado y su contenido
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Función para poblar la tabla de datos mensuales
function populateMonthlyData() {
    const tbody = document.querySelector('#monthlyData tbody');
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
                   'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    tbody.innerHTML = '';
    
    meses.forEach(mes => {
        const data = tourismData[mes];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${mes.charAt(0).toUpperCase() + mes.slice(1)}</td>
            <td>${data.arribos.toLocaleString()}</td>
            <td>${data.turistasEstables.toLocaleString()}</td>
            <td>${data.pernoctaciones.toLocaleString()}</td>
            <td>${data.estadia}</td>
            <td>$${data.gastoDiario.toFixed(2)}</td>
            <td>${data.ocupacion}%</td>
        `;
        tbody.appendChild(row);
    });
}

// Función para crear los gráficos
function createCharts() {
    createArrivalsChart();
    createExpensesChart();
}

// Gráfico de arribos mensuales
function createArrivalsChart() {
    const ctx = document.getElementById('arrivalsChart').getContext('2d');
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
                   'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const arribos = Object.values(tourismData).map(data => data.arribos);

    arrivalsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: meses,
            datasets: [{
                label: 'Arribos Mensuales',
                data: arribos,
                borderColor: '#00ff88',
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#00ff88',
                        font: {
                            family: 'Share Tech Mono'
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 255, 136, 0.2)'
                    },
                    ticks: {
                        color: '#00ff88',
                        font: {
                            family: 'Share Tech Mono'
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 255, 136, 0.2)'
                    },
                    ticks: {
                        color: '#00ff88',
                        font: {
                            family: 'Share Tech Mono'
                        }
                    }
                }
            }
        }
    });
}

// Gráfico de gastos diarios
function createExpensesChart() {
    const ctx = document.getElementById('expensesChart').getContext('2d');
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
                   'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const gastosConTransporte = Object.values(tourismData).map(data => data.gastoDiario);
    const gastosSinTransporte = Object.values(tourismData).map(data => data.gastoSinTransporte);

    expensesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: meses,
            datasets: [
                {
                    label: 'Con Transporte',
                    data: gastosConTransporte,
                    backgroundColor: 'rgba(0, 255, 136, 0.8)',
                    borderColor: '#00ff88',
                    borderWidth: 2
                },
                {
                    label: 'Sin Transporte',
                    data: gastosSinTransporte,
                    backgroundColor: 'rgba(0, 191, 255, 0.8)',
                    borderColor: '#00bfff',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#00ff88',
                        font: {
                            family: 'Share Tech Mono'
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 255, 136, 0.2)'
                    },
                    ticks: {
                        color: '#00ff88',
                        font: {
                            family: 'Share Tech Mono'
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 255, 136, 0.2)'
                    },
                    ticks: {
                        color: '#00ff88',
                        font: {
                            family: 'Share Tech Mono'
                        }
                    }
                }
            }
        }
    });
}

// Función para calcular diferencias entre meses
function calculateDifference() {
    const month1 = document.getElementById('month1').value;
    const month2 = document.getElementById('month2').value;
    const resultDiv = document.getElementById('differenceResult');
    
    const data1 = tourismData[month1];
    const data2 = tourismData[month2];
    
    const diferenciaGasto = data2.gastoDiario - data1.gastoDiario;
    const diferenciaArribos = data2.arribos - data1.arribos;
    const diferenciaPernoctaciones = data2.pernoctaciones - data1.pernoctaciones;
    const diferenciaEstadia = data2.estadia - data1.estadia;
    
    const porcentajeGasto = ((diferenciaGasto / data1.gastoDiario) * 100).toFixed(2);
    const porcentajeArribos = ((diferenciaArribos / data1.arribos) * 100).toFixed(2);
    
    resultDiv.innerHTML = `
        <h4>Comparación: ${month1.charAt(0).toUpperCase() + month1.slice(1)} vs ${month2.charAt(0).toUpperCase() + month2.slice(1)}</h4>
        <p><strong>Gasto Diario:</strong> $${data1.gastoDiario.toFixed(2)} → $${data2.gastoDiario.toFixed(2)}</p>
        <p><strong>Diferencia:</strong> $${diferenciaGasto.toFixed(2)} (${porcentajeGasto}%)</p>
        <p><strong>Arribos:</strong> ${data1.arribos.toLocaleString()} → ${data2.arribos.toLocaleString()}</p>
        <p><strong>Diferencia:</strong> ${diferenciaArribos.toLocaleString()} (${porcentajeArribos}%)</p>
        <p><strong>Pernoctaciones:</strong> ${data1.pernoctaciones.toLocaleString()} → ${data2.pernoctaciones.toLocaleString()}</p>
        <p><strong>Estadía:</strong> ${data1.estadia} → ${data2.estadia} noches</p>
    `;
}

// Función para analizar transporte
function analyzeTransport() {
    const month = document.getElementById('transportMonth').value;
    const resultDiv = document.getElementById('transportResult');
    const data = tourismData[month];
    
    const gastoTransporte = data.gastoDiario - data.gastoSinTransporte;
    const porcentajeTransporte = ((gastoTransporte / data.gastoDiario) * 100).toFixed(2);
    
    resultDiv.innerHTML = `
        <h4>Análisis de Transporte - ${month.charAt(0).toUpperCase() + month.slice(1)}</h4>
        <p><strong>Gasto Total:</strong> $${data.gastoDiario.toFixed(2)}</p>
        <p><strong>Gasto Sin Transporte:</strong> $${data.gastoSinTransporte.toFixed(2)}</p>
        <p><strong>Gasto en Transporte:</strong> $${gastoTransporte.toFixed(2)} (${porcentajeTransporte}%)</p>
        <p><strong>Uso de Avión:</strong> ${data.usoAvion}%</p>
        <p><strong>Uso de Auto:</strong> ${data.usoAuto}%</p>
        <p><strong>Uso de Ómnibus:</strong> ${data.usoOmnibus}%</p>
    `;
}

// Función para analizar eventos
function analyzeEvent() {
    const eventType = document.getElementById('eventType').value;
    const resultDiv = document.getElementById('eventResult');
    const event = eventosData[eventType];
    
    let html = `<h4>Análisis de Evento - ${eventType.replace(/([A-Z])/g, ' $1').trim()}</h4>`;
    
    if (event.arribos) {
        html += `
            <p><strong>Arribos:</strong> ${event.arribos.toLocaleString()}</p>
            <p><strong>Estadía Promedio:</strong> ${event.estadia} noches</p>
            <p><strong>Gasto Diario:</strong> $${event.gastoDiario}</p>
            <p><strong>Giro Estimado:</strong> $${(event.giroEstimado / 1000000).toFixed(0)}M</p>
        `;
    } else {
        html += `
            <p><strong>Descripción:</strong> ${event.descripcion}</p>
            <p><strong>Impacto:</strong> ${event.impacto}</p>
        `;
    }
    
    resultDiv.innerHTML = html;
}

// Función para generar comparaciones
function generateComparison() {
    const variable = document.getElementById('comparisonVariable').value;
    const period = document.getElementById('comparisonPeriod').value;
    
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
                   'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    let filteredMonths = [];
    let labels = [];
    
    switch(period) {
        case 'estival':
            filteredMonths = ['enero', 'febrero'];
            labels = ['Enero', 'Febrero'];
            break;
        case 'segundoSemestre':
            filteredMonths = ['septiembre', 'octubre', 'noviembre'];
            labels = ['Septiembre', 'Octubre', 'Noviembre'];
            break;
        case 'todoAno':
            filteredMonths = meses;
            labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
            break;
    }
    
    const data = filteredMonths.map(mes => {
        switch(variable) {
            case 'gastoDiario': return tourismData[mes].gastoDiario;
            case 'arribos': return tourismData[mes].arribos;
            case 'pernoctaciones': return tourismData[mes].pernoctaciones;
            case 'estadia': return tourismData[mes].estadia;
            case 'ocupacion': return tourismData[mes].ocupacion;
        }
    });
    
    createComparisonChart(labels, data, variable);
    updateComparisonStats(filteredMonths, variable);
}

// Función para crear gráfico de comparación
function createComparisonChart(labels, data, variable) {
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    
    if (comparisonChart) {
        comparisonChart.destroy();
    }
    
    const variableNames = {
        'gastoDiario': 'Gasto Diario ($)',
        'arribos': 'Arribos',
        'pernoctaciones': 'Pernoctaciones',
        'estadia': 'Estadía (noches)',
        'ocupacion': 'Ocupación (%)'
    };
    
    comparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: variableNames[variable],
                data: data,
                backgroundColor: 'rgba(0, 255, 136, 0.8)',
                borderColor: '#00ff88',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#00ff88',
                        font: {
                            family: 'Share Tech Mono'
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 255, 136, 0.2)'
                    },
                    ticks: {
                        color: '#00ff88',
                        font: {
                            family: 'Share Tech Mono'
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 255, 136, 0.2)'
                    },
                    ticks: {
                        color: '#00ff88',
                        font: {
                            family: 'Share Tech Mono'
                        }
                    }
                }
            }
        }
    });
}

// Función para actualizar estadísticas de comparación
function updateComparisonStats(meses, variable) {
    const statsDiv = document.getElementById('comparisonStats');
    const data = meses.map(mes => {
        switch(variable) {
            case 'gastoDiario': return tourismData[mes].gastoDiario;
            case 'arribos': return tourismData[mes].arribos;
            case 'pernoctaciones': return tourismData[mes].pernoctaciones;
            case 'estadia': return tourismData[mes].estadia;
            case 'ocupacion': return tourismData[mes].ocupacion;
        }
    });
    
    const promedio = data.reduce((a, b) => a + b, 0) / data.length;
    const maximo = Math.max(...data);
    const minimo = Math.min(...data);
    const rango = maximo - minimo;
    
    const variableNames = {
        'gastoDiario': 'Gasto Diario',
        'arribos': 'Arribos',
        'pernoctaciones': 'Pernoctaciones',
        'estadia': 'Estadía',
        'ocupacion': 'Ocupación'
    };
    
    statsDiv.innerHTML = `
        <h4>Estadísticas - ${variableNames[variable]}</h4>
        <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
        <p><strong>Máximo:</strong> ${maximo.toFixed(2)}</p>
        <p><strong>Mínimo:</strong> ${minimo.toFixed(2)}</p>
        <p><strong>Rango:</strong> ${rango.toFixed(2)}</p>
        <p><strong>Variación:</strong> ${((rango / promedio) * 100).toFixed(2)}%</p>
    `;
}

// Función para calcular impacto inflacionario
function calculateInflationImpact() {
    const baseAmount = parseFloat(document.getElementById('baseAmount').value);
    const inflationRate = parseFloat(document.getElementById('inflationRate').value);
    const resultDiv = document.getElementById('inflationResult');
    
    if (isNaN(baseAmount) || isNaN(inflationRate)) {
        resultDiv.innerHTML = '<p style="color: #ff6b6b;">Por favor ingrese valores válidos</p>';
        return;
    }
    
    const inflationMultiplier = 1 + (inflationRate / 100);
    const inflatedAmount = baseAmount * inflationMultiplier;
    const difference = inflatedAmount - baseAmount;
    
    resultDiv.innerHTML = `
        <h4>Impacto Inflacionario</h4>
        <p><strong>Monto Base:</strong> $${baseAmount.toFixed(2)}</p>
        <p><strong>Tasa de Inflación:</strong> ${inflationRate}%</p>
        <p><strong>Monto con Inflación:</strong> $${inflatedAmount.toFixed(2)}</p>
        <p><strong>Diferencia:</strong> $${difference.toFixed(2)}</p>
        <p><strong>Incremento:</strong> ${((difference / baseAmount) * 100).toFixed(2)}%</p>
    `;
}

// Función para formatear números grandes funca que esl o importante
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Función para calcular estadísticas generales cuesta entender pero bueno
function calculateGeneralStats() {
    const arribos = Object.values(tourismData).reduce((sum, data) => sum + data.arribos, 0);
    const pernoctaciones = Object.values(tourismData).reduce((sum, data) => sum + data.pernoctaciones, 0);
    const ocupacionPromedio = Object.values(tourismData).reduce((sum, data) => sum + data.ocupacion, 0) / 12;
    
    return {
        arribos,
        pernoctaciones,
        ocupacionPromedio: ocupacionPromedio.toFixed(1)
    };

} 
