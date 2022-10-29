new Morris.Line({
    // ID of the element in which to draw the chart.
    element: "myfirstchart",
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { monthly: "2022-07-05", value0: 1317, value1: 5000, value2: 7000 },
        { monthly: "2022-07-05", value0: 2521, value1: 5100, value2: 7000 },
        { monthly: "2022-07-05", value0: 3023, value1: 5200, value2: 7000 },
        { monthly: "2022-07-05", value0: 4024, value1: 5300, value2: 7000 },
        { monthly: "2022-07-06", value0: 5025, value1: 5400, value2: 7000 },
        { monthly: "2022-07-07", value0: 6026, value1: 5500, value2: 7000 },
        { monthly: "2022-07-08", value0: 7027, value1: 5600, value2: 7000 },
        { monthly: "2022-07-05", value0: 8028, value1: 5700, value2: 7000 },
    ],
    // The name of the data record attribute that contains x-values.
    xkey: "monthly", //"period" for
    // A list of names of data record attributes that contain y-values.
    ykeys: ["value0", "value1"],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    lineWidth: 1.8,
    labels: ["MO1", "MO2", "MO3"],
    ressize: true,
    lineColors: ["red", "#1194D6"],




});
new Morris.Donut({

    element: 'graphD',
    data: [
        { value: 70, label: 'SALIDOS DEL MÓDULO, ADEPTADOS' },
        { value: 15, label: 'FALTA DE INICIO DE RECORRIDO' },
        { value: 10, label: 'SIN COMUNICACIÓN: \n * GSP,   * GSM ' },
        { value: 5, label: 'Apagados, \n Reinicios inesperados.' }
    ],
    formatter: function (x) { return x + "%" }
}).on('click', function (i, row) {
    console.log(i, row);

});
//MAR
new Morris.Area({
    element: 'g_area0',
    behaveLikeLine: true,
    data: [
        { x: '2011 Q1', y: 3, z: 3 },
        { x: '2011 Q2', y: 2, z: 1 },
        { x: '2011 Q3', y: 2, z: 4 },
        { x: '2011 Q4', y: 3, z: 3 }
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z']
});

//Area
new Morris.Area({
    element: "graphArea",
    data: [
        { x: "2010 Q4", y: 3, z: 7, w: 11 },
        { x: "2011 Q1", y: 3, z: 4, w: 9 },
        { x: "2011 Q2", y: null, z: 3, w: 8 },
        { x: "2011 Q3", y: 2, z: 5, w: 7 },
        { x: "2011 Q4", y: 8, z: 2, w: 9 },
        { x: "2012 Q1", y: 4, z: 4, w: 11 },
    ], w: 11,
    xkey: "x",
    ykeys: ["y", "z", "w"],
    lineWidth: 4,
    //lineColors:[],
    labels: ["M1", "M2", "M3"],
}).on("click", function (i, row) {
    console.log(i, row);
});

//time events 
var week_data = [
    { "period": "2011 W27", "licensed": 3407, "sorned": 660 },
    { "period": "2011 W26", "licensed": 3351, "sorned": 629 },
    { "period": "2011 W25", "licensed": 3269, "sorned": 618 },
    { "period": "2011 W24", "licensed": 3246, "sorned": 661 },
    { "period": "2011 W23", "licensed": 3257, "sorned": 667 },
    { "period": "2011 W22", "licensed": 3248, "sorned": 627 },
    { "period": "2011 W21", "licensed": 3171, "sorned": 660 },
    { "period": "2011 W20", "licensed": 3171, "sorned": 676 },
    { "period": "2011 W19", "licensed": 3201, "sorned": 656 },
    { "period": "2011 W18", "licensed": 3215, "sorned": 622 },
    { "period": "2011 W17", "licensed": 3148, "sorned": 632 },
    { "period": "2011 W16", "licensed": 3155, "sorned": 681 },
    { "period": "2011 W15", "licensed": 3190, "sorned": 667 },
    { "period": "2011 W14", "licensed": 3226, "sorned": 620 },
    { "period": "2011 W13", "licensed": 3245, "sorned": null },
    { "period": "2011 W12", "licensed": 3289, "sorned": null },
    { "period": "2011 W11", "licensed": 3263, "sorned": null },
    { "period": "2011 W10", "licensed": 3189, "sorned": null },
    { "period": "2011 W09", "licensed": 3079, "sorned": null },
    { "period": "2011 W08", "licensed": 3085, "sorned": null },
    { "period": "2011 W07", "licensed": 3055, "sorned": null },
    { "period": "2011 W06", "licensed": 3063, "sorned": null },
    { "period": "2011 W05", "licensed": 2943, "sorned": null },
    { "period": "2011 W04", "licensed": 2806, "sorned": null },
    { "period": "2011 W03", "licensed": 2674, "sorned": null },
    { "period": "2011 W02", "licensed": 1702, "sorned": null },
    { "period": "2011 W01", "licensed": 1732, "sorned": null }
];
   /* not new */ Morris.Line({
    element: 'graphT',
    data: week_data,
    xkey: 'period',
    ykeys: ['licensed', 'sorned'],
    labels: ['Licensed', 'SORN'],
    events: [
        '2011-04',
        '2011-08'
    ]
});

//formats of dates
var day_data = [
    { "period": "2012-10-01", "licensed": 3407, "sorned": 660 },
    { "period": "2012-09-30", "licensed": 3351, "sorned": 629 },
    { "period": "2012-09-29", "licensed": 3269, "sorned": 618 },
    { "period": "2012-09-20", "licensed": 3246, "sorned": 661 },
    { "period": "2012-09-19", "licensed": 3257, "sorned": 667 },
    { "period": "2012-09-18", "licensed": 3248, "sorned": 627 },
    { "period": "2012-09-17", "licensed": 3171, "sorned": 660 },
    { "period": "2012-09-16", "licensed": 3171, "sorned": 676 },
    { "period": "2012-09-15", "licensed": 3201, "sorned": 656 },
    { "period": "2012-09-10", "licensed": 3215, "sorned": 622 }
];
Morris.Line({
    element: 'graphF',
    grid: false,
    data: day_data,
    xkey: 'period',
    ykeys: ['licensed', 'sorned'],
    labels: ['Licensed', 'SORN']
});

//Non-continuous data
var day_data = [
    { "period": "2012-10-01", "licensed": 3407 },
    { "period": "2012-09-30", "sorned": 0 },
    { "period": "2012-09-29", "sorned": 618 },
    { "period": "2012-09-20", "licensed": 3246, "sorned": 661 },
    { "period": "2012-09-19", "licensed": 3257, "sorned": null },
    { "period": "2012-09-18", "licensed": 3248, "other": 1000 },
    { "period": "2012-09-17", "sorned": 0 },
    { "period": "2012-09-16", "sorned": 0 },
    { "period": "2012-09-15", "licensed": 3201, "sorned": 656 },
    { "period": "2012-09-10", "licensed": 3215 }
];
Morris.Line({
    element: 'graphDD',
    data: day_data,
    xkey: 'period',
    ykeys: ['licensed', 'sorned', 'other'],
    labels: ['Licensed', 'SORN', 'Other'],
    /* custom label formatting with `xLabelFormat` */
    xLabelFormat: function (d) { return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear(); },
    /* setting `xLabels` is recommended when using xLabelFormat */
    xLabels: 'day'
});



