document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('electricity-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var voltage = parseFloat(document.getElementById('voltage').value);
        var current = parseFloat(document.getElementById('current').value);
        var hours = parseFloat(document.getElementById('hours').value);
        var rate = parseFloat(document.getElementById('rate').value);

        // Calculate power in watt-hours (Wh)
        var power = voltage * current;

        // Calculate energy in kilowatt-hours (kWh)
        var energy = power * hours / 1000;

        // Calculate total charge
        var totalCharge = energy * (rate / 100);

        document.getElementById('power').textContent = power + ' Wh';
        document.getElementById('energy').textContent = energy + ' kWh';
        document.getElementById('total-charge').textContent = totalCharge;
    });
});
