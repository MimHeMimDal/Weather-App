export const data = {
  weatherApiUrl:
    "http://api.weatherapi.com/v1/current.json?key=cd2724cb369a43caba7104526232903&aqi=no",
};

export const SetToLocal = function (arr) {
  if (arr.length > 6) {
    arr.shift();
    localStorage.setItem("lastSearch", JSON.stringify(arr));
  } else {
    localStorage.setItem("lastSearch", JSON.stringify(arr));
  }
};

export const GetFromLocal = function () {
  return JSON.parse(localStorage.getItem("lastSearch"));
};
// SetToLocal([]);
