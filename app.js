fetch('informes/informe-avui.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contingutInforme').innerHTML = data;
    })
    .catch(error => {
        document.getElementById('contingutInforme').innerHTML =
            'No s\'ha pogut carregar l\'informe.';
    });
