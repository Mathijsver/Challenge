var CHART = document.getElementById("lineChart");
var CHART2 = document.getElementById("donutChart");

let lineChart = new Chart (CHART, {
    type: 'line',
    data: {
        labels: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
        datasets: [
        {
        label: "Afgelegde afstand (x1000 km)",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#fff",
        borderColor: "#fff",
        borderCapstyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "#fff",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [40, 80, 100, 120, 240, 260, 280],
    }
        ]
    },
    options: { 
        legend: {
            labels: {
                fontColor: "white",
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",

                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                }
            }]
        }
    }
});

let donutChart = new Chart (CHART2, {
    type: 'doughnut',
    data: {
        labels: ['Koolstofdioxide','Stikstof', 'Argon', 'Zuurstof', 'Koolstofmoxide', 'Water', 'Stikstofoxiden'],
        datasets: [
            {
            label: 'Atmosfeer',
            backgroundColor: [ '#3e5589', '#18244a', '#8087b3', '#c8b1c3', '#00BCD4', '#F8BBD0', '#E3F2FD'],
            data: [95.32, 2.7, 1.6, 0.13, 0.07, 0.03, 0.01]
            }
            ]
    },
    options: { 
        legend: {
            labels: {
                fontColor: "white",
            }
        }
    }
});


                           
