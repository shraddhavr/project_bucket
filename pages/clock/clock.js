setInterval(() => {
    let session;
    const d = new Date()
    let hr = d.getHours()
    let min = d.getMinutes()
    let ss = d.getSeconds()

    if (hr >= 12 && hr <= 24) {
        session = 'PM'
    }
    else {
        // if(hr>=00 && hr<=12)
        session = 'AM'
    }
    if (hr > 12) {
        hr = hr - 12;
    }
    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    ss = (ss < 10) ? "0" + ss : ss;

    document.getElementById('clock').innerHTML = hr + ":" + min + ":" + ss + " " + session;


})