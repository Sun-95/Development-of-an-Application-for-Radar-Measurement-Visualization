const WebSocket = require('ws');
const axios = require('axios');

const socket = new WebSocket('ws://localhost:4000');

socket.onopen = () => {
    console.log('Connected to WebSocket server');
};

socket.onmessage = (event) => {
    console.log('Received data:', event.data);
    const radarData = JSON.parse(event.data);
    processRadarData(radarData);
};

socket.onclose = () => {
    console.log('Connection closed');
};

socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};

function processRadarData(data) {
    const scanAngle = data.scanAngle;
    if (data.echoResponses.length === 0) {
        console.warn('No echo responses received.');
        return;
    }
    data.echoResponses.forEach(response => {
        const distance = (response.time * 299792.458) / 2;
        const power = response.power;
        updatePlot(scanAngle, distance, power);
    });
}

function updateRadarConfig(measurementsPerRotation, rotationSpeed, targetSpeed) {
    axios.put('http://localhost:4000/config', {
        measurementsPerRotation: measurementsPerRotation,
        rotationSpeed: rotationSpeed,
        targetSpeed: targetSpeed
    })
        .then(response => {
            console.log('Configuration updated:', response.data);
        })
        .catch(error => {
            console.error('Error updating configuration:', error);
        });
}

function updatePlot(angle, distance, power) {
    const newPoint = {
        r: [[distance]],
        theta: [[angle]],
        'marker.color': [[power * 100]]
    };

    Plotly.extendTraces('radarPlot', newPoint, [0]);
}

const layout = {
    polar: {
        radialaxis: {
            visible: true,
            range: [0, 200],
            title: 'Distance (km)'
        },
        angularaxis: {
            visible: true,
            range: [0, 360]
        }
    }
};

const data = [{
    type: 'scatterpolar',
    mode: 'markers',
    r: [],
    theta: [],
    marker: {
        size: 8,
        color: [],
        colorscale: 'Viridis',
        cmin: 0,
        cmax: 100
    }
}];