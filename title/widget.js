let title = document.getElementById("title");

window.addEventListener("onWidgetLoad", (obj) => {
  (async () => {
    const response = await fetch(
      "https://decapi.me/twitch/title/" + obj.detail.channel.username
    );
    const text = await response.text();

    title.innerHTML = text;
  })();
});

window.addEventListener("onEventReceived", (obj) => {
  const listener = obj.detail.listener.split("-")[0];
  const event = obj.detail.event;
  const badges = obj.detail.event.data.badges;

  for (let i = 0; i < badges.length; i++) {
    if (
      listener === "message" &&
      event.renderedText.substring(0, 9) === "!settitle" &&
      badges[i].type === "broadcaster"
    ) {
      title.innerHTML = event.renderedText.substring(
        10,
        event.renderedText.length
      );
    }

    if (
      listener === "message" &&
      event.renderedText.substring(0, 8) === "!wptitle" &&
      badges[i].type === "broadcaster"
    ) {
      title.innerHTML = event.renderedText.substring(
        9,
        event.renderedText.length
      );
    }
  }
});
