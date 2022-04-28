const { DateTime } = require("luxon");
require('@fortawesome/fontawesome-free/js/all');

function availableRightNow() {
    const dt = DateTime.now().setZone('Europe/Rome');

    let span = '';

    if (dt.hour >= 9 && dt.hour < 18) {
        span = `
        <span>I am <b class="text-green-500 font-bold">Available</b> right now</span>
        `
    } else {
        span = `
        <span>I am <b class="text-red-500 font-bold">NOT Available</b> right now</span>
        `
    }

    document.getElementById('available-now').innerHTML = span;
}

setInterval(availableRightNow, 5000);
availableRightNow();