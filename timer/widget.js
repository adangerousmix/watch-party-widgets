let count = -{{countdown}},
    seconds = 0,
    secondsInMinutes = 0,
    minutes = 0,
    hours = 0,
    secs = 0,
    neg = "";

let time = document.getElementById("time");

let timer = setInterval(setTime, 1000);

window.addEventListener('onEventReceived', (obj) => {
  const listener = obj.detail.listener.split("-")[0];
  const event = obj.detail.event;
  const badges = obj.detail.event.data.badges;

  for (let i=0; i < badges.length; i++) {
    if (listener === "message" && event.renderedText.substring(0,8) === "!wpreset" && badges[i].type === "broadcaster") {
        count = -{{countdown}};
    }

    if (listener === "message" && event.renderedText.substring(0,8) === "!wpstart" && badges[i].type === "broadcaster") {
        count = 0;
    }

    if (listener === "message" && event.renderedText.substring(0,7) === "!wpadd " && badges[i].type === "broadcaster") {
        let time = event.renderedText.substring(6, event.renderedText.length);
        count = count + parseInt(time);
    }

    if (listener === "message" && event.renderedText.substring(0,7) === "!wpsub " && badges[i].type === "broadcaster") {
        let time = event.renderedText.substring(6, event.renderedText.length);
        count = count - parseInt(time);
    }

    if (listener === "message" && event.renderedText.substring(0,7) === "!wpset " && badges[i].type === "broadcaster") {
        let time = event.renderedText.substring(6, event.renderedText.length);
        count = parseInt(time);
    }
  }
});

function setTime() {
  ++count;

  if (count == 10800) {
      clearInterval(timer);
  }

  if (count < 0) {
      neg = "-";
  } else {
      neg = "";
  }

  seconds = Math.abs(count) % 60;
  minutes = (((Math.abs(count) - seconds) / 60) % 60);
  hours = Math.floor(Math.abs(count) / 3600);
  // console.log("c:", count, "h:", hours, "m:", minutes, "sm:", secondsInMinutes, "s:", seconds);
  time.innerHTML = neg + (pad(hours)) + ":" + (pad(minutes)) + ":" + (pad(seconds));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}