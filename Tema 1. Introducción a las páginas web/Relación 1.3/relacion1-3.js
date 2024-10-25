function ageCalculator() {
    const currentYear = document.getElementById('currentYear').value;
    const birthYear = document.getElementById('birthYear').value;

    const age1 = currentYear - birthYear;
    const age2 = age1 - 1;

    document.getElementById('resultadoEdad').innerHTML = `<p>You are either ${age1} or ${age2}</p>`;
}

function supplyCalculator() {
    const edad = document.getElementById('edad').value;
    const edadMaxima = document.getElementById('edadMaxima').value;
    const cantidadDiaria = document.getElementById('cantidadDiaria').value;

    const añosRestantes = edadMaxima - edad;
    const diasTotal = añosRestantes * 365;

    const totalProvision = Math.ceil(diasTotal * cantidadDiaria);

    document.getElementById('totalProvision').innerHTML = `<p>You will need ${totalProvision} to last you until the ripe old age of ${edadMaxima}</p>`;
}

function circumference() {
    const radio = document.getElementById('radioCircunferencia').value;

    const totalCircunferencia = parseFloat(2 * Math.PI * radio);

    document.getElementById('calcCircunferencia').innerHTML = `<p>The circumference is ${totalCircunferencia}</p>`;
}

function area() {
    const radio = document.getElementById('radioCirculo').value;

    const area = Math.PI * Math.pow(parseFloat(radio), 2);

    document.getElementById('areaCirculo').innerHTML = `<p>The area of the circle is ${area}</p>`;
}

function convertTemperatureFarenheit() {
    const gradosCelsius = document.getElementById('celsius').value;
    const convCelsius = parseFloat((gradosCelsius * 1.8) + 32);
    document.getElementById('celsiusAFarenheit').innerHTML = `<p>${gradosCelsius}ºC is ${convCelsius}ºF</p>`;
}

function convertTemperatureCelsius() {
    const gradosFarenheit = document.getElementById('farenheit').value;
    const convFarenheit = parseFloat((gradosFarenheit - 32) / 1.8);
    document.getElementById('farenheitACelsius').innerHTML = `<p>${gradosFarenheit}ºF is ${convFarenheit}ºC</p>`;
}
