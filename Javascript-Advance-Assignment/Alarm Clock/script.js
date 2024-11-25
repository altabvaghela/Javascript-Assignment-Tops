const currentTime = document.querySelector("h1"),
    selectMenu = document.querySelectorAll("select"),
    content = document.querySelector(".content"),
    setAlarmBtn = document.querySelector("button");
    let alarmTime;


for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    // console.log(i);

    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option)
}


for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    // console.log(i);

    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option)
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    // console.log(i);

    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option)
}


setInterval(() => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";
    if (h >= 12) {
        h = h - 12
        ampm = "PM"
    }
    h = h == 0 ? h = 12 : h

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s
    console.log(`${h}:${m}:${s} ${ampm}`);
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
    if (alarmTime == `${h}:${m}${ampm}`) {
        console.log('Alram Right...');


    }

}, 1000);

function setAlarm() {
    let time = `${selectMenu[0].value}:${selectMenu[1].value}${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please,Select a valid timeto set Alarm")
    }
    content.classList.add("disable")
    setAlarm.innerText = "clear Alarm"
    // console.log(time);
}


setAlarmBtn.addEventListener('click', setAlarm);