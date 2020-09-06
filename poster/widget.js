let twitchTitle = "",
  poster = document.getElementById("poster"),
  tmdbapikey = "";

window.addEventListener("onWidgetLoad", (obj) => {
  tmdbapikey = obj.detail.fieldData.tmdbapikey;
  (async () => {
    const response = await fetch(
      "https://decapi.me/twitch/title/" + obj.detail.channel.username
    );
    const text = await response.text();

    twitchTitle = text;
    movie();
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
      twitchTitle = event.renderedText.substring(10, event.renderedText.length);
      movie();
    }

    if (
      listener === "message" &&
      event.renderedText.substring(0, 8) === "!wptitle" &&
      badges[i].type === "broadcaster"
    ) {
      twitchTitle = event.renderedText.substring(9, event.renderedText.length);
      movie();
    }
  }
});

function movie() {
  let twitch = twitchTitle.split(" - ");

  if (twitch.length === 2) {
    let movieTitle = twitch[0].replace(" ", "%20");
    let movieYear = twitch[1].replace(" ", "%20");

    (async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=" +
          tmdbapikey +
          "&language=en-US&query=" +
          movieTitle +
          "&page=1&include_adult=false&year=" +
          movieYear
      );
      const json = await response.json();

      poster.innerHTML =
        '<img src="https://image.tmdb.org/t/p/w500' +
        String(json.results[0].poster_path) +
        '" title="Poster">';
    })();
  } else if (twitch.length === 3) {
    let tvTitle = twitch[0].replace(" ", "%20");
    let tvYear = twitch[1].replace(" ", "%20");

    (async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/tv?api_key=" +
          tmdbapikey +
          "&language=en-US&query=" +
          tvTitle +
          "&page=1&include_adult=false&first_air_date=" +
          tvYear
      );
      const json = await response.json();

      poster.innerHTML =
        '<img src="https://image.tmdb.org/t/p/w500' +
        String(json.results[0].poster_path) +
        '" title="Poster">';
    })();
  }
}
